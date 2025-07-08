document.querySelector('a[href="#primeiroTeste"]').addEventListener('click', function(e) {
       e.preventDefault();
       document.querySelector('#primeiroTeste').scrollIntoView({
         behavior: 'smooth'
       });
     });

document.querySelector('a[href="#segundoTeste"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#segundoTeste').scrollIntoView({
    behavior: 'smooth'
  });
});