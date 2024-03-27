sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment) {
        "use strict";

        return Controller.extend("com.sap.managequestionnaireapp.controller.View1", {
            onInit: function () {
                let data = [
                    {
                        "QuestionId": "	27174952",
                        "Questiontitle": "Query1",
                        "QuestionCatogrie": "category1",
                        "Active": "True",
                        "CreatedOn": "1/11/2024",
                        "CreatedBy": "danara",

                    },
                    {
                        "QuestionId": "27174954",
                        "Questiontitle": "Query2",

                        "QuestionCatogrie": "category2",
                        "Active": "True",
                        "CreatedOn": "1/11/2024",
                        "CreatedBy": "danara",

                    },
                    {
                        "QuestionId": "27174955",
                        "Questiontitle": "Query3",

                        "QuestionCatogrie": "category3",
                        "Active": "True",
                        "CreatedOn": "1/11/2024",
                        "CreatedBy": "danara",

                    },
                ];

                let jModel = new JSONModel(data);
                this.getView().setModel(jModel, "jModel");
            },
            onCreateQuestion: function () {
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
            onAdd: function () {
                let aa = this.getView().byId("questioncatid").getValue();
                let bb = this.getView().byId("questiontitleid").getValue();
                let currentDate = new Date();
                let day = currentDate.getDate();
                let month = currentDate.getMonth() + 1;
                let year = currentDate.getFullYear();
                let hours = currentDate.getHours();
                let minutes = currentDate.getMinutes();
                let seconds = currentDate.getSeconds();
                let QuestionId = day + "" + hours + "" + minutes + "" + seconds

                let date = day + '/' + month + '/' + year;
                let newData = {
                    "QuestionId": QuestionId,
                    "Questiontitle": bb,

                    "QuestionCatogrie": aa,
                    "Active": "True",
                    "CreatedOn": date,
                    "CreatedBy": "Annonymus",

                }

                let mymodel = this.getView().getModel("jModel");
                let olddata = mymodel.getData();
                olddata.push(newData)
                mymodel.setData(olddata);
                mymodel.refresh();
                this._QuestionDialog.close()
                this.getView().byId("questioncatid").setValue("");
                this.getView().byId("questiontitleid").setValue("");

            }
        });
    });
