import { exec } from 'child_process';

// Choosing interface names isn't easy alright
export interface parseRocketLeagueReplay {
  time: number;
  stderr?: string;
}

/*
 * Call the Rocket League parser via child process
 *
 * @param filePath Exact path of replay file to parse
 * @param outputFilePath Exact path of output file
 * @param s3 s3 client instance to use
 */
export const parseRocketLeagueReplay = async (
  filePath: string,
  outputFilePath: string
): Promise<parseRocketLeagueReplay> => {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    exec(`carball -i ${filePath} --json ${outputFilePath}`, {}, async (err, stdout, stderr) => {
      if (err) {
        console.log('Error: ', err);
        reject(err);
      }
      const end = Date.now();
      resolve({ time: end - start, stderr });
    });
  });
  // return new Promise((resolve, reject) => {
  //   exec(`parser/rocketquest.py -i ${filePath} -o ${outputFilePath}`, {}, async (err, stdout, stderr) => {
  //     if (err) reject(err);
  //     if (stderr) reject(stderr);

  //     const end = Date.now();
  //     resolve({ time: end - start });
  //   });
  // });
};
