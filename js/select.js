$(document).ready(function() {
    $('#selectEstado').on('change', function() {
      var selectedOption = $(this).val();
      if (selectedOption !== '') {
        $('#selectCiudad').prop('disabled', false);
      } else {
        $('#selectCiudad').prop('disabled', true);
        $('#selectCiudad').val('');
        $('#thirdSelect').prop('disabled', true);
        $('#thirdSelect').val('');
      }
    });

    $('#selectCiudad').on('change', function() {
      var selectedOption = $(this).val();
      if (selectedOption !== '') {
        $('#selectEspecialidad').prop('disabled', false);
      } else {
        $('#selectEspecialidad').prop('disabled', true);
        $('#selectEspecialidad').val('');
      }
    });
});

/*
$(document).ready(function() {
    $('#selectEstado').on('change', function() {
      var selectedOption = $(this).val();
      if (selectedOption !== '') {
        $('#selectCiudad').prop('disabled', false);
      } else {
        $('#selectCiudad').prop('disabled', true);
        $('#selectEspecialidad').prop('disabled', true);
      }
    });

    $('#selectCiudad').on('change', function() {
      var selectedOption = $(this).val();
      if (selectedOption !== '') {
        $('#selectEspecialidad').prop('disabled', false);
      } else {
        $('#selectEspecialidad').prop('disabled', true);
      }
    });
  });
  */