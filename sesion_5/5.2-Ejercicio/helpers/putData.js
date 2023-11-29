const PutData = async (url, datos) => {
  try {
    await axios.put(url, datos);
    alert("Usuario Actualizado");
  } catch (error) {
    console.log(error);
  }
};
export default PutData;
