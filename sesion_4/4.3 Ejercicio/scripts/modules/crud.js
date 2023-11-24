export const POST = async (dato_user, url) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(dato_user),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// =================Modificar====================== //

export const EDIT = async (dato_user, url) => {
  try {
    await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(dato_user),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// =================Eliminar====================== //

export const DELETE = async (url) => {
  try {
    await fetch(url, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};
