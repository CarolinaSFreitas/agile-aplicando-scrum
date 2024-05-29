"use strict";
const notas = document.querySelector(".notas");

const adicionaTitulo = document.querySelector(".tituloNota");
const adicionaTexto = document.querySelector(".textoNota");
const botaoAdiciona = document.querySelector(".botaoAdicionar");
const deletarNotas = document.querySelector(".botaoDeletar");

function addNote() {
    const noteContent = document.getElementById('new-note-content').value;
    if (noteContent.trim() === "") {
        alert("A nota não pode estar vazia!");
        return;
    }

    const notesContainer = document.getElementById('notes');
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');

    const noteTextarea = document.createElement('textarea');
    noteTextarea.value = noteContent;
    noteElement.appendChild(noteTextarea);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '&times;';
    deleteButton.onclick = () => {
        notesContainer.removeChild(noteElement);
    };
    noteElement.appendChild(deleteButton);

    notesContainer.appendChild(noteElement);
    document.getElementById('new-note-content').value = "";
}
