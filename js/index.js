var app = new Vue({
    el: "#app",
    data: {
        rowSelect: -1,
        consecutivo: 0,
        mcodigo: "",
        mdescription: "algo",
        mcajas: "",
        mpiezas: "",
        folioCreated: false,
        registers: [
            {consecutivo: 0, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
            {consecutivo: 1, codigo: 213213, description: "ewr", cajas: 23, piezas: "0.00"},
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
        setFolio: function() {
            this.folioCreated = true;
        },
        setSelectedRow: function(row) {
            this.rowSelect = row;
            $(`#${row}tr`).focus();
        },
        enterInput: function(idNext) {
            $(`#${idNext}`).focus();
            if (idNext === "cajas" || idNext === "piezas") {
                const cantidad = ($(`#${idNext}`).val()).trim();
                if (cantidad === "") {
                    if (idNext === "cajas") {this.mcajas = "0.00";} else {this.mpiezas = "0.00";}
                    $(`#${idNext}`).val("0.00");
                }
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
                alert("Campo Articulo o Descripcion vacio");
                return;
            }
            const parsedCajas = parseFloat(this.mcajas);
            if (isNaN(parsedCajas)) {
                alert("Inserto caracteres no numericos en uCompra");
                return;
            }
            const parsedPiezas = parseFloat(this.mpiezas);
            if (isNaN(parsedPiezas)) {
                alert("Inserto caracteres no numericos en uVenta");
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