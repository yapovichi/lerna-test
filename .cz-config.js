'use strict';

module.exports = {
  types: [
    { value: 'feat', name: 'feat:      新增一个功能' }, // 写入changelog中
    { value: 'fix', name: 'fix:       修复一个功能缺陷' }, // 写入changelog中
    { value: 'build', name: 'build:     提交成果物' },
    { value: 'ci', name: 'ci:        发布新版本' },
    { value: 'css', name: 'css:       修改视觉追踪，或优化样式' },
    { value: 'docs', name: 'docs:      文档变更' },
    {
      value: 'style',
      name: 'style:     代码风格变更（解决代码冲突、修复静态校验等）'
    },
    {
      value: 'refactor',
      name: 'refactor:  代码重构（逻辑结构或目录结构发生变化）'
    },
    { value: 'perf', name: 'perf:      优化性能' },
    { value: 'test', name: 'test:      新增或修改测试用例' },
    {
      value: 'chore',
      name: 'chore:     框架变更（框架工具优化升级、eslint规则变动等）'
    },
    { value: 'revert', name: 'revert:    代码回退' },
    { value: 'WIP', name: 'WIP:       正在进行的工作（功能未全部完成）' }
  ],

  scopes: [
    {
      name: '@lerna-test',
      name: '@lerna-test/theme',
      name: '@lerna-test/utils',
      name: '@lerna-test/map-container',
      name: '@lerna-test/map-layer-control',
      name: '@lerna-test/map-layer-switch',
      name: '@lerna-test/map-spatial-query',
      name: '@lerna-test/map-complex-location',
      name: '@lerna-test/map-complex-mark',
      name: '@lerna-test/map-complex-query',
      name: '@lerna-test/map-complex-track'
    }
  ],

  allowBreakingChanges: ['feat', 'fix'],

  // limit subject length
  subjectLimit: 100
};
