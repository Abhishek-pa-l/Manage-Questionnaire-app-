sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,Fragment) {
        "use strict";

        return Controller.extend("com.sap.managequestionnaireapp.controller.View1", {
            onInit: function () {
                let data = [
                    {
                        "QuestionId": "ITT24.0001",
                        "QuestionCatogrie": "catogrie1",
                        "Active": "true",
                        "CreatedOn": "1/11/2024",
                        "CreatedBy": "danara",
                        
                    },
                    {
                        "QuestionId": "ITT24.0002",
                        "QuestionCatogrie": "catogrie2",
                        "Active": "true",
                        "CreatedOn": "1/11/2024",
                        "CreatedBy": "danara",
                        
                    },
                    {
                        "QuestionId": "ITT24.0003",
                        "QuestionCatogrie": "catogrie3",
                        "Active": "true",
                        "CreatedOn": "1/11/2024",
                        "CreatedBy": "danara",
                        
                    },
                ];
    
                let jModel = new JSONModel(data);
                this.getView().setModel(jModel, "jModel");
            },
            onCreateQuestion : function () {
                debugger
                if (!this._QuestionDialog) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.managequestionnaireapp.view.fragment.CreateQuestion",
                        controller: this
                    }).then(oDialog => {
                        this._QuestionDialog = oDialog;
                        this.getView().addDependent()
                        oDialog.open()
                    })
                }
                else {
                    this._QuestionDialog.open()
                }
            },
            onCancelCreateQuestionFrag: function () {
                this._QuestionDialog.close()

            },
        });
    });
