var nombre={
    nombres: ["", "", "", "", ""],
    edades: ["", "", "", "", ""],
    calcular: function(){
        this.nombres=document.getElementById('nombres').value
        this.edades=document.getElementById('edades').value
        persona=document.getElementById('persona')


        var parrafo =document.createElement('p')
        var contenido =document.createTextNode('El nombre de la persona es ' + this.nombres + ' y tiene ' + this.edades + ' años ')
        parrafo.appendChild(contenido)
        persona.appendChild(parrafo)

      
        

    }
};


