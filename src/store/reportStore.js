import { defineStore } from 'pinia'

export const useReportStore = defineStore("reportStore", {
    id: "report",
    // state
    state: () => ({
      rep: {
        immediate: [],
        short: [],
        long: [],
        complete: []
      },
      logic: {
        '01-02-02': {
          category: 'immediate',
          title: 'Bookmark key advice sites',
          desc: `Bookmark our resources page to refer to for some great resources, or use the links to create specific bookmarks. If you need help or support, you can quickly find them again! https://4fox.uk/resources`
        },
        '01-03-02': {
          category: 'immediate',
          title: 'Bookmark key phishing reporting sites',
          desc: 'The following link will take you to Action Fraud, and explain how you can report suspicious emails and SMS. Bookmark it for next time, so you can quickly refer to it if you need to. https://www.actionfraud.police.uk/report-phishing'
        },
        '02-01-02': {
          category: 'long',
          title: 'Consider setting up a password manager',
          desc: "We'd recommend looking into a password manager to keep track of your passwords. Unique passwords help minimise the risk to your other accounts in the event that your password is involved in a breach."
        },
        '02-02-02': {
          category: 'short',
          title: 'Look at setting up \'multifactor\' options for key accounts',
          desc: 'While its not a quick thing to set up, it will save you a bunch of time and headaches in the future! We would recommend avoiding SMS options (apps are better!) and at minimum, set this for your online banking and email accounts.'
        },
        '02-03-01': {
          category: 'short',
          title: 'Consider getting a VPN for devices you use on public wifi networks',
          desc: 'A VPN will protect your connection from being snooped by whoever is managing the public network - but ensure you trust the VPN provider!'
        },
        'LAP-01-02': {
          category: 'short',
          title: 'Update your laptop',
          desc: 'Out of date devices can have bugs which make it easier to hack or disrupt.'
        },
        'LAP-01-03': {
          category: 'immediate',
          title: 'Check your laptop for updates',
          desc: 'Out of date devices can have bugs which make it easier to hack or disrupt. First step is to see if you have any pending updates!'
        },
        'LAP-02-01': {
          category: 'short',
          title: 'Set up separate user accounts',
          desc: 'You can usually set up a separate user account for each family member on laptops, which helps keep things like passwords and files secure from other users!'
        },
        'LAP-03-02': {
          category: 'short',
          title: 'Review the security tools available for your laptop',
          desc: 'Have a look online or with the device manufacturer for in-built security tools'
        },
        'LAP-03-03': {
          category: 'short',
          title: 'Review the security tools available for your laptop',
          desc: 'Have a look online or with the device manufacturer for in-built security tools'
        },
        'LAP-04-02': {
          category: 'immediate',
          title: 'Set a password, PIN, or other authentication on your laptop',
          desc: 'This will prevent anyone else from using the device'
        },
        'LAP-05-02': {
          category: 'long',
          title: 'Review your files and create a backup copy',
          desc: 'Any valuable files should have copies in the case of a device issue. Don\'t just store them on the device!'
        },
        'LAP-06-02': {
          category: 'short',
          title: 'Understand how to wipe the device if needed',
          desc: 'Its good to know how to wipe the device securely in case you sell it, or need to send it for repair. Make sure you back it up first!'
        },
        'TAB-01-02': {
          category: 'short',
          title: 'Update your tablet',
          desc: 'Out of date devices can have bugs which make it easier to hack or disrupt.'
        },
        'TAB-01-03': {
          category: 'immediate',
          title: 'Check your tablet for updates',
          desc: 'Out of date devices can have bugs which make it easier to hack or disrupt. First step is to see if you have any pending updates!'
        },
        'TAB-02-02': {
          category: 'short',
          title: 'Review the security tools available for your tablet',
          desc: 'Have a look online or with the device manufacturer for in-built security tools'
        },
        'TAB-02-03': {
          category: 'short',
          title: 'Review the security tools available for your tablet',
          desc: 'Have a look online or with the device manufacturer for in-built security tools'
        },
        'TAB-03-02': {
          category: 'immediate',
          title: 'Set a password, PIN, or other authentication on your tablet',
          desc: 'This will prevent anyone else from using the device'
        },
        'TAB-04-02': {
          category: 'long',
          title: 'Review the files on your tablet and create a backup copy',
          desc: 'Any valuable files should have copies in the case of a device issue. Don\'t just store them on the device!'
        },
        'TAB-05-02': {
          category: 'short',
          title: 'Understand how to wipe your tablet if needed',
          desc: 'Its good to know how to wipe the device securely in case you sell it, or need to send it for repair. Make sure you back it up first!'
        },
        'MOB-01-02': {
          category: 'short',
          title: 'Update your smartphone',
          desc: 'Out of date devices can have bugs which make it easier to hack or disrupt.'
        },
        'MOB-01-03': {
          category: 'immediate',
          title: 'Check your smartphone for updates',
          desc: 'Out of date devices can have bugs which make it easier to hack or disrupt. First step is to see if you have any pending updates!'
        },
        'MOB-02-02': {
          category: 'short',
          title: 'Review the security tools available for your smartphone',
          desc: 'Have a look online or with the device manufacturer for in-built security tools'
        },
        'MOB-02-03': {
          category: 'short',
          title: 'Review the security tools available for your smartphone',
          desc: 'Have a look online or with the device manufacturer for in-built security tools'
        },
        'MOB-03-02': {
          category: 'immediate',
          title: 'Set a password, PIN, or other authentication on your smartphone',
          desc: 'This will prevent anyone else from using the device'
        },
        'MOB-04-02': {
          category: 'long',
          title: 'Review the files on your smartphone and create a backup copy',
          desc: 'Any valuable files should have copies in the case of a device issue. Don\'t just store them on the device!'
        },
        'MOB-05-02': {
          category: 'short',
          title: 'Understand how to wipe your smartphone if needed',
          desc: 'Its good to know how to wipe the device securely in case you sell it, or need to send it for repair. Make sure you back it up first!'
        },
        'SMA-01-02': {
          category: 'short',
          title: 'Update your smart devices and/or home security system',
          desc: 'Out of date devices can have bugs which make it easier to hack or disrupt.'
        },
        'SMA-01-03': {
          category: 'immediate',
          title: 'Check your smart devices and/or home security system for updates',
          desc: 'Out of date devices can have bugs which make it easier to hack or disrupt. First step is to see if you have any pending updates!'
        },
        'SMA-02-02': {
          category: 'short',
          title: 'Review the security tools available for your smart devices and/or home security',
          desc: 'Have a look online or with the device manufacturer for in-built security tools'
        },
        'SMA-02-03': {
          category: 'short',
          title: 'Review the security tools available for your smart devices and/or home security',
          desc: 'Have a look online or with the device manufacturer for in-built security tools'
        },
        'SMA-03-02': {
          category: 'immediate',
          title: 'Set a password, PIN, or other authentication on your home security',
          desc: 'This will prevent anyone else from using the device'
        },
        'SMA-04-02': {
          category: 'long',
          title: 'Check what files are stored and ensure they are backed up.',
          desc: 'Any valuable files should have copies in the case of a device issue. Some systems may overwrite files so make sure you are aware of your settings!'
        },
        'SMA-05-02': {
          category: 'short',
          title: 'Understand how to wipe your home security system if needed',
          desc: 'Its good to know how to wipe the device(s) securely in case you sell it, or need to send it for repair. Make sure you back it up first!'
        },
        'SMA-06-02': {
          category: 'immediate',
          title: 'Disconnect the device from the internet',
          desc: 'If your device doesn\'t need to be connected to the internet, its safer to just disconnect it!'
        },
      }
    }),
    // getters
    // actions
    actions: {
      updateReport(action,qid,ans) {
        // Lookup logic for question and determine current report status
        console.log(this.logic[ans])
          if(this.logic[ans]) {
            // Define the category the applicable response will belong in
            const category = this.logic[ans].category;
            if (action) {
              // reporting to be added to
              const report = {
                ref: ans,
                title: this.logic[ans].title,
                desc: this.logic[ans].desc
              }
              //get current report position and log to blueprint
              const pos = this.rep[category].length
              this.rep[category].push(report)
              console.log(pos);
            } else if (!action) {
              // remove from report
              for (let i = 0; i < this.rep[category].length; i++) {
                if (this.rep[category][i].ref == ans) {
                  this.rep[category].splice(i,1);
                } 
              }


            }
          }
        // Determine new answer requirements

        // Add or remove from correct report category
      }
    }

  })