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
                        "QuestionId": "	275174952",
                        "Questiontitle": "Please attach company registration license (or other similar certificate in accordance with your national law)",
                        "QuestionCatogrie": " Instructions for Completion ",
                        "Active": "True",
                        "ResponseType": "Attachment",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "727174954",
                        "Questiontitle": "Full legal name of the company",

                        "QuestionCatogrie": "Company General Information ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "257174955",
                        "Questiontitle": "Legal status",

                        "QuestionCatogrie": "Company General Information ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "277174955",
                        "Questiontitle": "Year of establishment",

                        "QuestionCatogrie": "Company General Information ",
                        "Active": "True",
                        "ResponseType": "Date",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "327174955",
                        "Questiontitle": "Legal address of company ",
                        "QuestionCatogrie": "Company General Information ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    }, {
                        "QuestionId": "227174955",
                        "Questiontitle": "VAT number",

                        "QuestionCatogrie": "Company General Information ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271794955",
                        "Questiontitle": "Total No. of Employees",

                        "QuestionCatogrie": "Human resources  ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271374955",
                        "Questiontitle": "Local Employees",

                        "QuestionCatogrie": "Human resources  ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271674955",
                        "Questiontitle": "Has your company already provided subcontract/ outsourcing activities to the KPO? ",

                        "QuestionCatogrie": "Business relationship with KPO ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271734955",
                        "Questiontitle": "Is your company already a supplier of KPO?",

                        "QuestionCatogrie": "Business relationship with KPO ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,
                    },
                    {
                        "QuestionId": "271274955",
                        "Questiontitle": "For which activities?",

                        "QuestionCatogrie": "Business relationship with KPO ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271774955",
                        "Questiontitle": "Name",

                        "QuestionCatogrie": "Compiler who completed the questionnaire for prequalification process  ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271274955",
                        "Questiontitle": "Surname",

                        "QuestionCatogrie": "Compiler who completed the questionnaire for prequalification process  ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271734955",
                        "Questiontitle": "Organizational Role",

                        "QuestionCatogrie": "Compiler who completed the questionnaire for prequalification process  ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    }, {
                        "QuestionId": "271744955",
                        "Questiontitle": "Name and surname of the person or the company in charge of the process ",

                        "QuestionCatogrie": "To be filled in case of use of a consultant to complete the ",
                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749655",
                        "Questiontitle": "Type of relationship ",

                        "QuestionCatogrie": "To be filled in case of use of a consultant to complete the ",

                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749559",
                        "Questiontitle": "BIN/IIN of the consultant ",

                        "QuestionCatogrie": "To be filled in case of use of a consultant to complete the ",

                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749559",
                        "Questiontitle": "Does your company have the certificates of  ISO 45001 Health and Safety MS, ISO 14001 Environmental MS, ISO 39001 Road traffic safety MS?  ",

                        "QuestionCatogrie": "MED._HIGH_ HSE questionnaire",

                        "Active": "True",
                        "ResponseType": "Text",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749559",
                        "Questiontitle": "Please provide copies of certificates",

                        "QuestionCatogrie": "MED._HIGH_ HSE questionnaire",

                        "Active": "True",
                        "ResponseType": "Attachment",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749559",
                        "Questiontitle": "Provide a valid (not older than 5 years) and approved (signed) by Senior management written Health, Safety and Environmental (HSE) policy.",

                        "QuestionCatogrie": "MED._HIGH_ HSE questionnaire",

                        "Active": "True",
                        "ResponseType": "Attachment",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749559",
                        "Questiontitle": "Do you have HSE management system certifications (e.g. ISO 45001 Health and Safety MS, ISO 14001 Environmental MS, ISO 39001 Road traffic safety MS etc.). .",

                        "QuestionCatogrie": "LOW_HSE questionnaire",

                        "Active": "True",
                        "ResponseType": "Attachment",
                        "AttachmentNeeded": true,

                    },
                    {
                        "QuestionId": "271749559",
                        "Questiontitle": "HSE Policy ",

                        "QuestionCatogrie": "HSE Management System",

                        "Active": "True",
                        "ResponseType": "Attachment",
                        "AttachmentNeeded": true,

                    },

                ];
                let data2 = [
                    {
                        "QuestionCatogrie": "Instructions for Completion"
                    }, {
                        "QuestionCatogrie": "HSE Management System"
                    }, {
                        "QuestionCatogrie": "LOW_HSE questionnaire"
                    }, {
                        "QuestionCatogrie": "MED._HIGH_ HSE questionnaire"
                    }, {
                        "QuestionCatogrie": "Compiler who completed the questionnaire for prequalification process"
                    },
                ]

                let jModel = new JSONModel(data);
                this.getView().setModel(jModel, "jModel");
                let sModel = new JSONModel(data2);
                this.getView().setModel(sModel, "sModel");


            },
            onCreateQuestion: function () {

                if (!this.questionDialog) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.managequestionnaireapp.view.fragment.CreateQuestion",
                        controller: this
                    }).then(oDialog => {
                        this.questionDialog = oDialog
                        this.getView().addDependent(oDialog)
                        oDialog.open()
                    })
                } else {
                    this.questionDialog.open()
                }
            },

            onCancelCreateQuestionFrag: function () {
                this.questionDialog.close()

            },
            onAdd: function () {
                let aa = this.getView().byId("Select112").getSelectedKey();
                let bb = this.getView().byId("questiontitleid").getValue();

                if (!bb) {
                    this.getView().byId("questiontitleid").setValueState(sap.ui.core.ValueState.Error);
                    this.getView().byId("questiontitleid").setValueStateText("Title is mandatory")
                    return;
                }
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
                    "ResponseType": "Attachment",
                    "AttachmentNeeded": true,

                }

                let mymodel = this.getView().getModel("jModel");
                let olddata = mymodel.getData();
                olddata.push(newData)
                mymodel.setData(olddata);
                mymodel.refresh();
                this._QuestionDialog.close()
                this.getView().byId("questioncatid").setValue("");
                this.getView().byId("questiontitleid").setValue("");

            },
            onSave: function () {
                sap.m.MessageBox.success("Changes Saved Successfully!!")
            },
            onDelete: function () {
                sap.m.MessageBox.success("Changes Deleted Successfully!!")
            },
            onModify: function () {
                this.onCreateQuestion();
            },
            onAdd: function () {
                let oModel = this.getOwnerComponent().getModel();
                let questionCategory = this.getView().byId("Select112").getSelectedItem().getText();
                let inputField = this.getView().byId("questiontitleid").getValue();
                let active = this.getView().byId("active").getSelected();
                let responseType = this.getView().byId("responseType").getSelectedItem().getText();
                let attachmentRequired = this.getView().byId("attachmentRequired").getSelected();

                // console.log(questionCategory, inputField, active, responseType, attachmentRequired)
                let questions = {
                    questionTitle: inputField,
                    questionCategory: questionCategory,
                    active: active,
                    responsetype: responseType,
                    attachmentRequired: attachmentRequired,
                }

                oModel.create("/Manage_questionnaireT", questions, {
                    success: function (data) {

                        sap.m.MessageBox.success("Data saved " );

                    },
                    error: function () {
                        sap.m.MessageBox.error("Error saving data");
                    }

                });
            },


        
        });
    });
