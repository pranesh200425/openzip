const zip = document.getElementById("fileIn");
const filecon = document.getElementById("filecon")

const fileoutCont = document.getElementById('download')

const dispFile = () => {
  fileoutCont.style.display = "flex";
  console.log("works")
}

zip.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  const zip = await JSZip.loadAsync(file);
  console.log(zip);
  Object.keys(zip.files).forEach(
    async function(filename) {
      const a = document.createElement("a")
      const h4 = document.createElement("h4");
      h4.append(a)
      a.classList.add('downloadlink');
      a.textContent = filename;

      const zipEntry = zip.files[filename];

      if (zipEntry.dir) return;

      const blob = await zipEntry.async("blob");

      a.href = URL.createObjectURL(blob);
      a.download = filename

      const name = document.createElement("div");
      name.classList.add('name');
      name.append(a);
      const downloadCon = document.createElement('div');
      downloadCon.classList.add('downloadCon')
      downloadCon.append(name);
      filecon.append(downloadCon)
      console.log(downloadCon)

    }
  )
  dispFile()

})


