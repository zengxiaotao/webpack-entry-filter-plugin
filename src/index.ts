import type { Compiler, EntryNormalized } from 'webpack';
import fs from 'fs';
import minimatch from 'minimatch';

type PluginOptions = {

}

const localeFileName = `.entryrc`;

export class WebpackEntryFilterPlugin {
  options: PluginOptions;
  includes!: string[];

  constructor(options: PluginOptions) {
    this.options = options;
    this.includes = [];
    this._loadLocaleFile();
  }

  _loadLocaleFile() {
    try {
      this.includes = fs.readFileSync(localeFileName, 'utf-8')
          .split('\n')
          .filter((line) => line && !line.startsWith('#'))
      console.log('load locale entry config file', this.includes);
    } catch (e) {
      return;
    }
  }

  apply(compiler: Compiler) {
    compiler.hooks.entryOption.tap('WebpackEntryFilterPlugin', (_: any, entry: EntryNormalized) => {
      // 不满足从 entry 中 delete
      Object.keys(entry).forEach((key) => {
        if (this.includes.length && !this.includes.some((include) => minimatch(key, include))) {
          // @ts-ignore
          delete entry[key];
        }
      })

      return undefined as any;
    })
  }
}