var editorElement = document.getElementById('editor');
var resultElement = document.getElementById('result');
// var undoElement = document.getElementById('undo');
// var redoElement = document.getElementById('redo');
// var clearElement = document.getElementById('clear');
var convertElement = document.getElementById('convert');

// editorElement.addEventListener('changed', function (event) {
//   undoElement.disabled = !event.detail.canUndo;
//   redoElement.disabled = !event.detail.canRedo;
//   clearElement.disabled = event.detail.isEmpty;
// });

editorElement.addEventListener('exported', function (evt) {

  const exports = evt.detail.exports;
  if (exports && exports['application/x-latex']) {
    convertElement.disabled = false;
    resultElement.innerHTML = '<span>' + exports['application/x-latex'] + '</span>';
  } else if (exports && exports['application/mathml+xml']) {
    convertElement.disabled = false;
    resultElement.innerText = exports['application/mathml+xml'];
  } else if (exports && exports['application/mathofficeXML']) {
    convertElement.disabled = false;
    resultElement.innerText = exports['application/mathofficeXML'];
  } else {
    convertElement.disabled = true;
    resultElement.innerHTML = '';
  }
});
// undoElement.addEventListener('click', function () {
//   editorElement.editor.undo();
// });
// redoElement.addEventListener('click', function () {
//   editorElement.editor.redo();
// });
// clearElement.addEventListener('click', function () {
//   editorElement.editor.clear();
// });
convertElement.addEventListener('click', function () {
  // editorElement.editor.convert();
  console.log( editorElement.editor.model.exports['application/x-latex'])
  let text = editorElement.editor.model.exports['application/x-latex'];
  translate.translate( text )
           .then( res => res.json())
           .then( res => {
               let newText = res['data'].translations[0].translatedText;
               console.log( res['data'].translations[0].translatedText )
               let childNode = resultElement.firstChild;
               childNode.innerText = newText;
           } )
});

/**
 * Attach an editor to the document
 * @param {Element} The DOM element to attach the ink paper
 * @param {Object} The recognition parameters
 */
MyScript.register(editorElement, {
  recognitionParams: {
    type: 'MATH',
    protocol: 'WEBSOCKET',
    apiVersion: 'V4',
    server: {
      scheme: 'https',
      host: 'webdemoapi.myscript.com',
      applicationKey: 'a66b7772-9764-42eb-80c0-2bc05a2d950b',
      hmacKey: 'be78bac2-9d73-4b6f-bc6f-a6822d61b9d3'
    },
    v4: {
      math: {
        mimeTypes: ['application/x-latex']
      }
    }
  }
});

window.addEventListener('resize', function () {
  editorElement.editor.resize();
});