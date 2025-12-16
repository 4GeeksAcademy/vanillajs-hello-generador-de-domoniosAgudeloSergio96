
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.es', '.us', '.io']; 

const ul = document.getElementById('domainOutput');

for (let pronounWord of pronoun) {
  for (let adjWord of adj) {
    for (let nounWord of noun) {
      for (let extType of extensions) {
        const domain = pronounWord + adjWord + nounWord + extType;

        const li =document.createElement('li');
        li.textContent = domain;
        ul.appendChild(li);
      }
    }
  }
}
