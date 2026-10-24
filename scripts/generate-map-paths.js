const fs = require('fs');
const path = require('path');
const d3Geo = require('d3-geo');

function main() {
  const geoPath = path.join(process.cwd(), 'public', 'data', 'telangana_constituencies_boundaries.geojson');
  if (!fs.existsSync(geoPath)) {
    console.error('Boundaries file does not exist!');
    process.exit(1);
  }

  const geojson = JSON.parse(fs.readFileSync(geoPath, 'utf8'));
  console.log(`Loaded ${geojson.features.length} features.`);

  // Fit to 900x850 canvas using exact geo bounding box
  const bbox = {
    type: 'MultiPoint',
    coordinates: [
      [77.2358, 15.8364], // SW corner of Telangana
      [81.3226, 19.9169]  // NE corner of Telangana
    ]
  };

  const width = 900;
  const height = 850;
  const projection = d3Geo.geoMercator().fitExtent([[30, 30], [width - 30, height - 30]], bbox);
  const pathGenerator = d3Geo.geoPath().projection(projection);

  const constituencyPaths = geojson.features.map(f => {
    const d = pathGenerator(f);

    // Compute exact planar bounds and centroid
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    let sumX = 0, sumY = 0, count = 0;

    function walkCoords(c) {
      if (typeof c[0] === 'number') {
        const [x, y] = projection(c);
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        sumX += x;
        sumY += y;
        count++;
      } else {
        c.forEach(walkCoords);
      }
    }
    walkCoords(f.geometry.coordinates);

    const centroid = count > 0 ? [Math.round((sumX / count) * 10) / 10, Math.round((sumY / count) * 10) / 10] : [0, 0];
    const bounds = [
      [Math.round(minX * 10) / 10, Math.round(minY * 10) / 10],
      [Math.round(maxX * 10) / 10, Math.round(maxY * 10) / 10]
    ];

    return {
      id: f.id,
      acNo: f.properties.acNo,
      acName: f.properties.acName,
      district: f.properties.district,
      mla: f.properties.mla,
      party: f.properties.party,
      partyAbbr: f.properties.partyAbbr,
      votes: f.properties.votes,
      voteShare: f.properties.voteShare,
      runnerUp: f.properties.runnerUp,
      margin: f.properties.margin,
      isFlagship: f.properties.isFlagship,
      profileSlug: f.properties.profileSlug,
      svgPath: d,
      centroid,
      bounds
    };
  });

  console.log(`Generated ${constituencyPaths.length} SVG paths.`);
  const qp = constituencyPaths.find(c => c.isFlagship || c.acName.toLowerCase().includes('quthbullapur'));
  console.log('Quthbullapur centroid & bounds:', qp ? { centroid: qp.centroid, bounds: qp.bounds, mla: qp.mla, party: qp.party } : 'Not found');

  const outPath = path.join(process.cwd(), 'src', 'data', 'map-paths.json');
  fs.writeFileSync(outPath, JSON.stringify(constituencyPaths));
  console.log(`Saved map paths to ${outPath}. File size: ${Math.round(fs.statSync(outPath).size / 1024)} KB`);
}

main();
