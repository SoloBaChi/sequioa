export default function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    //  When onload
    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    // check if theres errror uploading
    fileReader.onerror = (err) => {
      reject(err);
    };
  });
}
