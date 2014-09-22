var restler = require('restler');

restler.get('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-1/pulls?state=closed').on('complete', function(repos) {
  if (repos instanceof Error) {
    console.log('Error:', repos.message);
    this.retry(5000);
  } 
  else {
    console.log(repos);
  }
});