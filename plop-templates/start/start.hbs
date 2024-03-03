import 'reflect-metadata';
import { readFileSync } from "fs";
import { constantCase } from 'change-case-all'

const FILE_PATH = "feature_toggles.json";

function populateEnvironment() {
  console.log(`Populating environment variables from ${FILE_PATH}...`)
  try {
    const feature_toggles = JSON.parse(readFileSync(FILE_PATH, "utf-8"));

    for (const layer_key in feature_toggles) {
      for (const resource in feature_toggles[layer_key]) {
        process.env[`CONFIG_${constantCase(resource)}`] = feature_toggles[layer_key][resource].state
      }
    }
  } catch (error) {
    console.error("ERROR ON POPULATING ENVIRONMENT:: ", error)
  }
}

populateEnvironment()

import './src';