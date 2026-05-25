import * as core from "@actions/core";

async function run() {
  const joke = "Why do programmers prefer dark mode? Because light attracts bugs.";
  console.log(joke);
  core.setOutput("joke", joke);
}

run();
