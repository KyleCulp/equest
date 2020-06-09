import parser from '../native';

// I could extend this to get more than just what I want out of a replay
// It's only needed to extract a replay's id mid http request, so speed is key

loadReplayFile

function parseReplay(data: Uint8Array) {
  const t0 = performance.now();
  let replay = parser.parse(data);
  const t1 = performance.now();
  
  return {
    replay_id: ,
    parseMs: t1 - t0,
  };
}

async function loadReplayFile(file: File) {
  let data = await new Response(file).arrayBuffer().then((x) => new Uint8Array(x));
  parseReplay(data);
}
