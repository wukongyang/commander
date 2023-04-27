const gulp = require('gulp');
let exec = require('child_process').exec;
//编译ts文件
gulp.task('build-ts',  (done)=> {
  exec('tsc', (error) => {
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
  done();
  return;
});
//自动重启服务器
gulp.task('restart',  ()=> {
  const spawn = exec(
    'pm2-dev start ./.bin/index.js',
    { encoding: 'utf-8' },
    (error) => {
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    },
  );
  spawn.stdout.on('data', (chunk) => {
    console.log(chunk);
  });
});
//开发任务
gulp.task('dev', gulp.series('build-ts', 'restart'));
