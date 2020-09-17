var app = new Vue({
    el: "#app",
    data: {
        rowSelect: -1,
        consecutivo: 1,
        mcodigo: "",
        mdescription: "",
        mcajas: "",
        mpiezas: "",
        registers: [
            {consecutivo: 0, codigo: "7127172712", description: "Sabritas", cajas: 0.00, piezas: 56}
        ]
    },
    methods: {
        setSelectedRow: function(row) {
            this.rowSelect = row;
        },
        enterInput: function(idNext) {
            $(`#${idNext}`).focus();
            if (idNext === "cajas" || idNext === "piezas") {
                this.mcajas = "0.00";
                $(`#${idNext}`).val("0.00");
                $(`#${idNext}`).select();
            }
        },
        insertData: function() {
            const instancia = this;
            const object = {
                "consecutivo": instancia.consecutivo,
                "codigo": instancia.mcodigo,
                "description": instancia.mdescription,
                "cajas": instancia.mcajas,
                "piezas": instancia.mpiezas
            };
            this.registers.push(object);
            this.cleanCamps();
            this.consecutivo++;
            $("#codigo").focus();
        },
        cleanCamps: function() {
            this.mcodigo = "";
            this.mdescription = "";
            this.mcajas = "";
            this.mpiezas = "";
        },
        escape: function() {
            this.cleanCamps();
            $("#codigo").focus();
        }
    }
});