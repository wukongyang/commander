module.exports = {
  types: [//描述修改的性质是什么，是bugfix还是feat，在这里进行定义。
    { value: 'feat', name: 'feat🌟:新功能' },
    { value: 'fix', name: 'fix🔧: 修复Bug' },
    { value: 'docs', name: 'docs📖: 文档更新' },
    {
      value: 'style',
      name: 'style🌹: 样式更新',
    },
    {
      value: 'refactor',
      name: 'refactor😊:重构了',
    },
    { value: 'test', name: 'test🍉:测试代码' },
  ],
  //定义之后，我们就可以通过上下键去选择 scope
  // scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

  usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*针对每一个type去定义scope

  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "选择你要提交的类型",
    // scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    // customScope: 'Denote the SCOPE of this change:',
     subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    // body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    // footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },
  // 设置为 true，在 scope 选择的时候，会有 empty 和 custom 可以选择，顾名思义，选择 empty 表示 scope 缺省，如果选择 custom，则可以自己输入信息
  allowCustomScopes: true,
  //如上设置为 ['feat', 'fix']，只有我们type选择了 feat 或者是 fix，才会询问我们 breaking message.
  allowBreakingChanges: ['feat', 'fix'],
  // 指定跳过哪些步骤，例如跳过我们刚刚说的详细描述，设置其为 scope: ['body']，假设我们的项目也不会涉及到关联 issue，我们可以设置其为 scope: ['body', 'footer']
  skipQuestions: ['scope','customScope','breaking','footer','body'],

  // 描述的长度限制
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};