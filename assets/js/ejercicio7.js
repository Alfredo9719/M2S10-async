console.log("Entro ejercicio 7");

// Swal.fire(
//   'Good job!',
//   'You clicked the button!',
//   'success'
// )

Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }else {
    Swal.fire(
      'Mensaje',
      'Accion cancelada',
      'error'
    )
  }
})