const fs = require('fs');
const path = require('path');

async function main() {
  console.log('Fetching 2023 Telangana election results from Wikipedia...');
  const url = 'https://en.wikipedia.org/w/api.php?action=parse&page=2023_Telangana_Legislative_Assembly_election&prop=wikitext&section=27&format=json';
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'TelanganaLeadershipExplorer/1.0 (academic research public prototype)'
    }
  });
  const json = await res.json();
  const wt = json.parse.wikitext['*'];

  function cleanWiki(str) {
    if (!str) return '';
    let s = str.trim();
    // remove leading pipes or exclamation marks
    s = s.replace(/^[|!]+\s*/, '');
    // remove style attributes like style="..." |
    s = s.replace(/style="[^"]*"\s*\|\s*/g, '');
    s = s.replace(/style='[^']*'\s*\|\s*/g, '');
    // remove <ref> tags
    s = s.replace(/<ref[\s\S]*?<\/ref>/gi, '');
    s = s.replace(/<ref[^>]*\/>/gi, '');
    // remove party templates like {{Party name with color|...}}
    s = s.replace(/\{\{Party name with color\|([^}]+)\}\}/gi, '$1');
    s = s.replace(/\{\{[^}]+\}\}/g, '');
    // remove wiki links [[target|display]] or [[target]]
    s = s.replace(/\[\[(?:[^|\]]*\|)?([^\]]+)\]\]/g, '$1');
    return s.trim();
  }

  const rows = wt.split(/\n\|-/);
  const results = [];
  let currentDistrict = 'Adilabad';

  for (let i = 1; i < rows.length; i++) {
    const rawRow = rows[i].trim();
    if (!rawRow) continue;
    const lines = rawRow.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length < 5) continue;

    let offset = 0;
    // Check if line 0 has district
    if (lines[0].startsWith('|') && !lines[0].startsWith('!')) {
      let rawDist = cleanWiki(lines[0]);
      rawDist = rawDist.replace(/^.*?\|\s*/, '').replace(/rowspan="\d+"\s*\|?\s*/gi, '').trim();
      if (rawDist && !rawDist.match(/^\d+$/)) {
        let d = rawDist.replace(/\s*district/i, '').trim();
        if (d === 'Asifabad') d = 'Kumuram Bheem Asifabad';
        if (d === 'Nagarkunool') d = 'Nagarkurnool';
        if (d === 'Jangoan') d = 'Jangaon';
        if (d === 'Jayashankar Bhupalpalle') d = 'Jayashankar Bhupalpally';
        currentDistrict = d;
        offset = 1;
      }
    }

    const acNoLine = lines[offset];
    if (!acNoLine || !acNoLine.startsWith('!')) continue;
    const acNoMatch = acNoLine.match(/!+(\d+)/);
    if (!acNoMatch) continue;
    const acNo = parseInt(acNoMatch[1], 10);

    const acName = cleanWiki(lines[offset + 1]);
    const winnerName = cleanWiki(lines[offset + 2]);
    const winnerParty = cleanWiki(lines[offset + 3]);
    const winnerVotes = cleanWiki(lines[offset + 4]);
    const winnerVoteShare = cleanWiki(lines[offset + 5]);
    const runnerName = cleanWiki(lines[offset + 6]);
    const runnerParty = cleanWiki(lines[offset + 7]);
    const runnerVotes = cleanWiki(lines[offset + 8]);
    const runnerVoteShare = cleanWiki(lines[offset + 9]);
    const margin = cleanWiki(lines[offset + 10]);

    // Normalize party name
    let normParty = winnerParty;
    if (normParty.includes('Congress')) normParty = 'Indian National Congress';
    else if (normParty.includes('Bharat Rashtra Samithi') || normParty.includes('BRS')) normParty = 'Bharat Rashtra Samithi';
    else if (normParty.includes('Bharatiya Janata Party') || normParty.includes('BJP')) normParty = 'Bharatiya Janata Party';
    else if (normParty.includes('All India Majlis-e-Ittehadul Muslimeen') || normParty.includes('AIMIM')) normParty = 'All India Majlis-e-Ittehadul Muslimeen';
    else if (normParty.includes('Communist Party of India') || normParty.includes('CPI')) normParty = 'Communist Party of India';

    let normRunnerParty = runnerParty;
    if (normRunnerParty.includes('Congress')) normRunnerParty = 'Indian National Congress';
    else if (normRunnerParty.includes('Bharat Rashtra Samithi') || normRunnerParty.includes('BRS')) normRunnerParty = 'Bharat Rashtra Samithi';
    else if (normRunnerParty.includes('Bharatiya Janata Party') || normRunnerParty.includes('BJP')) normRunnerParty = 'Bharatiya Janata Party';
    else if (normRunnerParty.includes('All India Majlis-e-Ittehadul Muslimeen') || normRunnerParty.includes('AIMIM')) normRunnerParty = 'All India Majlis-e-Ittehadul Muslimeen';
    else if (normRunnerParty.includes('Communist Party of India') || normRunnerParty.includes('CPI')) normRunnerParty = 'Communist Party of India';

    results.push({
      acNo,
      constituencyName: acName,
      slug: acName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      district: currentDistrict,
      mla: winnerName,
      party: normParty,
      partyAbbr: normParty === 'Bharat Rashtra Samithi' ? 'BRS' :
                 normParty === 'Indian National Congress' ? 'INC' :
                 normParty === 'Bharatiya Janata Party' ? 'BJP' :
                 normParty === 'All India Majlis-e-Ittehadul Muslimeen' ? 'AIMIM' :
                 normParty === 'Communist Party of India' ? 'CPI' : 'OTH',
      votes: winnerVotes,
      voteShare: winnerVoteShare ? `${winnerVoteShare}%` : '',
      runnerUp: {
        name: runnerName,
        party: normRunnerParty,
        partyAbbr: normRunnerParty === 'Bharat Rashtra Samithi' ? 'BRS' :
                   normRunnerParty === 'Indian National Congress' ? 'INC' :
                   normRunnerParty === 'Bharatiya Janata Party' ? 'BJP' :
                   normRunnerParty === 'All India Majlis-e-Ittehadul Muslimeen' ? 'AIMIM' :
                   normRunnerParty === 'Communist Party of India' ? 'CPI' : 'OTH',
        votes: runnerVotes,
        voteShare: runnerVoteShare ? `${runnerVoteShare}%` : ''
      },
      margin: margin || '',
      electionYear: 2023,
      isFlagship: acNo === 45 || acName.toLowerCase().includes('quthbullapur'),
      hasDetailedProfile: [45, 29, 28, 39, 71, 115].includes(acNo) || acName.toLowerCase().includes('quthbullapur') || acName.toLowerCase().includes('sircilla') || acName.toLowerCase().includes('siddipet') || acName.toLowerCase().includes('gajwel') || acName.toLowerCase().includes('kodangal'),
      profileSlug: (acNo === 45 || acName.toLowerCase().includes('quthbullapur')) ? 'kp-vivekanand' :
                   (acNo === 29 || acName.toLowerCase().includes('sircilla')) ? 'ktr' :
                   (acNo === 28 || acName.toLowerCase().includes('siddipet')) ? 'harish-rao' :
                   (acNo === 39 || acName.toLowerCase().includes('gajwel')) ? 'kcr' :
                   (acNo === 71 || acName.toLowerCase().includes('kodangal')) ? 'revanth-reddy' :
                   null
    });
  }

  // Sort by acNo
  results.sort((a, b) => a.acNo - b.acNo);

  console.log(`Parsed ${results.length} constituencies. First:`, results[0], `Last:`, results[results.length - 1]);

  // Write to public/data/constituencies_119.json
  const outJson = path.join(process.cwd(), 'public', 'data', 'constituencies_119.json');
  fs.writeFileSync(outJson, JSON.stringify(results, null, 2));
  console.log('Saved to', outJson);

  // Now let's combine and optimize the GeoJSON boundaries!
  const rawGeoPath = path.join(process.cwd(), 'public', 'data', 'telangana_assembly_raw.geojson');
  if (fs.existsSync(rawGeoPath)) {
    console.log('Processing GeoJSON features...');
    const rawGeo = JSON.parse(fs.readFileSync(rawGeoPath, 'utf8'));
    
    // Map of acNo -> constituency
    const acMap = new Map();
    for (const r of results) {
      acMap.set(r.acNo, r);
    }

    // Merge duplicates if any (like 119 Bhadrachalam)
    const featureMap = new Map();
    for (const f of rawGeo.features) {
      const acNo = f.properties.AC_NO;
      if (!featureMap.has(acNo)) {
        featureMap.set(acNo, f);
      } else {
        // Merge polygons
        const existing = featureMap.get(acNo);
        if (existing.geometry.type === 'Polygon' && f.geometry.type === 'Polygon') {
          existing.geometry = {
            type: 'MultiPolygon',
            coordinates: [existing.geometry.coordinates, f.geometry.coordinates]
          };
        } else if (existing.geometry.type === 'MultiPolygon' && f.geometry.type === 'Polygon') {
          existing.geometry.coordinates.push(f.geometry.coordinates);
        }
      }
    }

    // Round coordinates to 4 decimal places (~10m precision, cuts file size from 3.5MB to ~700KB)
    function roundCoords(coords) {
      if (typeof coords[0] === 'number') {
        return [Math.round(coords[0] * 10000) / 10000, Math.round(coords[1] * 10000) / 10000];
      }
      return coords.map(roundCoords);
    }

    const processedFeatures = [];
    for (let acNo = 1; acNo <= 119; acNo++) {
      const f = featureMap.get(acNo);
      const cData = acMap.get(acNo);
      if (f) {
        processedFeatures.push({
          type: 'Feature',
          id: acNo,
          properties: {
            acNo: acNo,
            acName: cData ? cData.constituencyName : f.properties.AC_NAME,
            district: cData ? cData.district : f.properties.DIST_NAME,
            mla: cData ? cData.mla : '',
            party: cData ? cData.party : '',
            partyAbbr: cData ? cData.partyAbbr : '',
            votes: cData ? cData.votes : '',
            voteShare: cData ? cData.voteShare : '',
            runnerUp: cData ? cData.runnerUp : null,
            margin: cData ? cData.margin : '',
            isFlagship: cData ? cData.isFlagship : false,
            profileSlug: cData ? cData.profileSlug : null
          },
          geometry: {
            type: f.geometry.type,
            coordinates: roundCoords(f.geometry.coordinates)
          }
        });
      }
    }

    const processedGeo = {
      type: 'FeatureCollection',
      features: processedFeatures
    };

    const outGeoPath = path.join(process.cwd(), 'public', 'data', 'telangana_constituencies_boundaries.geojson');
    fs.writeFileSync(outGeoPath, JSON.stringify(processedGeo));
    console.log(`Saved optimized GeoJSON with ${processedFeatures.length} features to ${outGeoPath}. Size: ${Math.round(fs.statSync(outGeoPath).size / 1024)} KB`);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
