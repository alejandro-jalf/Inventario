var app = new Vue({
    el: "#app",
    data: {
        rowSelect: -1,
        consecutivo: 0,
        mcodigo: "",
        mdescription: "",
        mcajas: "",
        mpiezas: "",
        registers: [
            {consecutivo: 0, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 2, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 3, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 4, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 5, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 6, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 7, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 8, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 9, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 10, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 11, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 12, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 13, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 14, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 15, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 16, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"}
        ]
    },
    methods: {
        setSelectedRow: function(row) {
            this.rowSelect = row;
            $(`#${row}tr`).focus();
        },
        enterInput: function(idNext) {
            $(`#${idNext}`).focus();
            if (idNext === "cajas" || idNext === "piezas") {
                if (idNext === "cajas") {this.mcajas = "0.00";} else {this.mpiezas = "0.00";}
                $(`#${idNext}`).val("0.00");
                $(`#${idNext}`).select();
            }
        },
        moveInput: function(idNext) {
            $(`#${idNext}`).focus();
            $(`#${idNext}`).select();
        },
        escape: function() {
            this.cleanCamps();
        },
        insertData: function() {
            if (!this.validaInsert()) {
                alert("Campo codigo o producto vacio");
                return;
            }
            if (this.mcajas.trim() === "") this.mcajas = "0.00";
            if (this.mpiezas.trim() === "") this.mpiezas = "0.00";
            this.registers.push({
                consecutivo: this.consecutivo,
                codigo: this.mcodigo,
                description: this.mdescription,
                cajas: this.mcajas,
                piezas: this.mpiezas
            });
            this.cleanCamps();
            this.consecutivo++;
        },
        validaInsert: function() {
            if (this.mcodigo.trim() === "") return false;
            if (this.mdescription.trim() === "") return false;
            return true;
        },
        cleanCamps: function() {
            this.mcodigo = "";
            this.mdescription = "";
            this.mcajas = "";
            this.mpiezas = "";
            $("#codigo").focus();
        }
    }
});