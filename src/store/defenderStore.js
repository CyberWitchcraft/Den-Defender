import { defineStore } from 'pinia'
import { useReportStore } from '@/store/reportStore';
import { deviceQuestions, deviceAnswers } from './questions';

export const useDefenderStore = defineStore("defenderStore", {
    id: "def",
    // state
    state: () => ({
        title: "Hello World",
        sections: {
          current: 0,
          list: ["def1","def2"]
        },
        qList: [
          [
            {ref:'01-01',label:"Which of the following devices do you have?",multi:true},
            {ref:'01-02',label:"Do you know where to go for cybersecurity advice and guidance?",multi:false},
            {ref:'01-03',label:"Do you know where to report a suspicious email or text message?",multi:false}

          ],
          [
            {ref:'02-01',label:"Do you use a unique password for every account?",multi:false},
            {ref:'02-02',label:"Do you have any additional security on key accounts (such as online banking and email) - such as text message or app notifications?",multi:false},
            {ref:'02-03',label:"Do you regularly use public wifi networks?",multi:false}
          ],
        ],
        answers: {
          '01-01': {
            '01-01-LAP': {id: "-LAP", label: "Laptop", status: false},
            '01-01-TAB': {id: "-TAB", label: "Tablet", status: false},
            '01-01-MOB': {id: "-MOB", label: "Smartphone", status: false},
            '01-01-SMA': {id: "-SMA", label: "Security Camera/Smart Doorbell", status: false},
          },
          '01-02': {
            '01-02-01': {id: "-01", label: "Yes", status: false},
            '01-02-02': {id: "-02", label: "No", status: false},
          },
          '01-03': {
            '01-03-01': {id: "-01", label: "Yes", status: false},
            '01-03-02': {id: "-02", label: "No", status: false},
          },
          '02-01': {
            '02-01-01': {id: "-01", label: "Yes", status: false},
            '02-01-02': {id: "-02", label: "No", status: false},
          },
          '02-02': {
            '02-02-01': {id: "-01", label: "Yes", status: false},
            '02-02-02': {id: "-02", label: "No", status: false},
          },
          '02-03': {
            '02-03-01': {id: "-01", label: "Yes", status: false},
            '02-03-02': {id: "-02", label: "No", status: false},
          },
          }
          }
        ),
    // getters
    getters: {
      totalSections(state) {
        return state.qList.length;
      }
    },
    // actions
    actions: {
      response(answer,qid,mx,key) {
        const report = useReportStore()
        const ref = qid + key;
        console.log(ref);
        const status = this.answers[qid][ref].status;
        this.answers[qid][ref].status = !status;
        report.updateReport(!status,qid,ref)

        //Catch if the question will create new sections
        if (qid == '01-01') {
          this.modifySections(!status, answer);
        }
        // If the question is not multi choice, we want to remove the other answers
        if (!mx && this.answers[qid][ref].status) {
          // Check each of the answers 
          for (let ans in this.answers[qid]) {
            // If the answer is selected and it is not the current answer
            if (this.answers[qid][ans].status && this.answers[qid][ans].id !== key) {
              // Remove the answer, and update the report
              this.answers[qid][ans].status = false;
              report.updateReport(false,qid,ans);
            }
          }
        }
      },
      modifySections(addStatus, answer) {
        //If the request is to add a new section
        const questionCategory = answer.id.substring(1);
        if (addStatus){
          //Add a section relating to the answer to the sections list 
          //Use the ID field for the alpbabetical reference
          this.sections.list.push(questionCategory);
          //Import Questions
          this.qList.push(deviceQuestions[questionCategory]);
          // Check number of answers to import
          const pos = this.totalSections -1;
          const num = this.qList[pos].length
          for (let i = 0; i < num; i++) {
            let ref = this.qList[pos][i].ref;
            if (!this.answers[ref]) {
              this.answers[ref] = deviceAnswers[ref]
            }

          }
          // If removing an answer
        } else if (!addStatus){
          // Find index value in sections list
          const categories = this.sections.list;
          const pos = categories.indexOf(questionCategory);
          this.sections.list.splice(pos,1)
          this.qList.splice(pos,1)
          }
      },
      updateSection(ref) {
        if(ref == 'prev') { this.sections.current --; }
        if(ref =="next") {this.sections.current ++; }
      }
    }
  }
  )