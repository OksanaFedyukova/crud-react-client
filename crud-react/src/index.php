<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "citas";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])){
    $sqlCitas = mysqli_query($conexionBD,"SELECT * FROM citas WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlCitas) > 0){
        $citas = mysqli_fetch_all($sqlCitas,MYSQLI_ASSOC);
        echo json_encode($citas);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["borrar"])){
    $sqlCitas = mysqli_query($conexionBD,"DELETE FROM citas WHERE id=".$_GET["borrar"]);
    if($sqlCitas){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));

    $fecha=$data->fecha;
    $technology=$data->technology;
    $coder=$data->coder;
    $description=$data->description;

        if(($fecha!="")&&($technology!="")&&($coder!="") &&($description!="") ){
            
    $sqlCitas = mysqli_query($conexionBD,"INSERT INTO citas(fecha, technology, coder, description) VALUES('$fecha','$technology', '$coder', '$decscription')");

    echo json_encode(["success"=>1]);
        }
    exit();
}
// Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización
if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
  
    $fecha=$data->fecha;
    $technology=$data->technology;
    $coder=$data->coder;
    $description=$data->description;

    
    $sqlCitas = mysqli_query($conexionBD,"UPDATE citas SET fecha='$fecha',technology='$technology', coder='$coder', description='$description' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}
// Consulta todos los registros de la tabla empleados
$sqlCitas = mysqli_query($conexionBD,"SELECT * FROM citas");
if(mysqli_num_rows($sqlEmpleaados) > 0){
    $citas = mysqli_fetch_all($sqlCitas,MYSQLI_ASSOC);
    echo json_encode($citas);
}
else{ echo json_encode([["success"=>0]]); }


?>