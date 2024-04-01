export const deviceQuestions = {
  'LAP': [
    {ref:'LAP-01',label:"Thinking specifically about your laptop, do you know if it is up to date?",multi:false},
    {ref:'LAP-02',label:"For your laptop, does anyone else use the device?",multi:false},
    {ref:'LAP-03',label:"Do you know if you have set up any of the in-built security tools to protect the device?",multi:false},
    {ref:'LAP-04',label:"Is the laptop protected by a password, PIN, fingerprint or similar that you have set?",multi:false},
    {ref:'LAP-05',label:"Do you have a backup of the important photos, documents etc. on the device?",multi:false},
    {ref:'LAP-06',label:"Do you know what to do if you were disposing/selling the device?",multi:false}
  ],
  'TAB': [
    {ref:'TAB-01',label:"Thinking specifically about your tablet, do you know if it is up to date?",multi:false},
    {ref:'TAB-02',label:"Do you know if you have set up any of the in-built security tools to protect the device?",multi:false},
    {ref:'TAB-03',label:"Is your tablet protected by a password, PIN, fingerprint or similar that you have set?",multi:false},
    {ref:'TAB-04',label:"Do you have a backup of the important photos, documents etc. on the device?",multi:false},
    {ref:'TAB-05',label:"Do you know what to do if you were disposing/selling the device?",multi:false}
  ],
  'MOB': [
    {ref:'MOB-01',label:"Thinking specifically about your smartphone, do you know if it is up to date?",multi:false},
    {ref:'MOB-02',label:"Do you know if you have set up any of the in-built security tools to protect the device?",multi:false},
    {ref:'MOB-03',label:"Is your smartphone protected by a password, PIN, fingerprint or similar that you have set?",multi:false},
    {ref:'MOB-04',label:"Do you have a backup of the important photos, documents etc. on the device?",multi:false},
    {ref:'MOB-05',label:"Do you know what to do if you were disposing/selling the device?",multi:false}
  ],
  'SMA': [
    {ref:'SMA-01',label:"Thinking specifically about your smart devices and/or home security, do you know if it is up to date?",multi:false},
    {ref:'SMA-02',label:"Do you know if you have set up any of the in-built security tools to protect the device?",multi:false},
    {ref:'SMA-03',label:"Is your access to the device protected by a password, PIN, fingerprint or similar that you have set?",multi:false},
    {ref:'SMA-04',label:"Do you have a backup of the important photos, documents etc. on the device?",multi:false},
    {ref:'SMA-05',label:"Do you know what to do if you were disposing/selling the device?",multi:false},
    {ref:'SMA-06',label:"Does it need to be connected to the internet?",multi:false},
  ]
}

export const deviceAnswers = {
    'LAP-01': {
        'LAP-01-01': {id: "-01", label: "Yes, Its up to date", status: false},
        'LAP-01-02': {id: "-02", label: "No, it needs an update", status: false},
        'LAP-01-03': {id: "-03", label: "I don't know", status: false},
    },
    'LAP-02': {
      'LAP-02-01': {id: "-01", label: "Yes", status: false},
      'LAP-02-02': {id: "-02", label: "No", status: false},
    },
    'LAP-03': {
      'LAP-03-01':{id: "-01", label: "Yes", status: false},
      'LAP-03-02':{id: "-02", label: "No", status: false},
      'LAP-03-03':{id: "-03", label: "Don't Know", status: false}
    },
    'LAP-04': {
      'LAP-04-01':{id: "-01", label: "Yes", status: false},
      'LAP-04-02':{id: "-02", label: "No", status: false},
    },
    'LAP-05': {
      'LAP-05-01':{id: "-01", label: "Yes", status: false},
      'LAP-05-02': {id: "-02", label: "No", status: false},
    },
    'LAP-06': {
      'LAP-06-01':{id: "-01", label: "Yes", status: false},
      'LAP-06-02':{id: "-02", label: "No", status: false},
    },
    'TAB-01': {
      'TAB-01-01':{id: "-01", label: "Yes, Its up to date", status: false},
      'TAB-01-02':{id: "-02", label: "No, it needs an update", status: false},
      'TAB-01-03':{id: "-03", label: "I don't know", status: false},
    },
    'TAB-02': {
      'TAB-02-01':{id: "-01", label: "Yes", status: false},
      'TAB-02-02':{id: "-02", label: "No", status: false},
      'TAB-02-03':{id: "-03", label: "Don't Know", status: false},
    },
    'TAB-03': {
      'TAB-03-01':{id: "-01", label: "Yes", status: false},
      'TAB-03-02':{id: "-02", label: "No", status: false},
    },
    'TAB-04': {
      'TAB-04-01':{id: "-01", label: "Yes", status: false},
      'TAB-04-02':{id: "-02", label: "No", status: false},
    },
    'TAB-05': {
      'TAB-05-01':{id: "-01", label: "Yes", status: false},
      'TAB-05-02':{id: "-02", label: "No", status: false},
    },
    'MOB-01': {
      'MOB-01-01':{id: "-01", label: "Yes, Its up to date", status: false},
      'MOB-01-02':{id: "-02", label: "No, it needs an update", status: false},
      'MOB-01-03':{id: "-03", label: "I don't know", status: false},
    },
    'MOB-02': {
      'MOB-02-01':{id: "-01", label: "Yes", status: false},
      'MOB-02-02':{id: "-02", label: "No", status: false},
      'MOB-02-03':{id: "-03", label: "Don't Know", status: false},
    },
    'MOB-03': {
      'MOB-03-01':{id: "-01", label: "Yes", status: false},
      'MOB-03-02':{id: "-02", label: "No", status: false},
    },
    'MOB-04': {
      'MOB-04-01':{id: "-01", label: "Yes", status: false},
      'MOB-04-02':{id: "-02", label: "No", status: false},
    },
    'MOB-05': {
      'MOB-05-01':{id: "-01", label: "Yes", status: false},
      'MOB-05-02':{id: "-02", label: "No", status: false},
    },
    'SMA-01': {
      'SMA-01-01': {id: "-01", label: "Yes, Its up to date", status: false},
      'SMA-01-02':{id: "-02", label: "No, it needs an update", status: false},
      'SMA-01-03':{id: "-03", label: "I don't know", status: false},
    },
    'SMA-02': {
      'SMA-02-01':{id: "-01", label: "Yes", status: false},
      'SMA-02-02':{id: "-02", label: "No", status: false},
      'SMA-02-03':{id: "-03", label: "Don't Know", status: false},
    },
    'SMA-03': {
      'SMA-03-01':{id: "-01", label: "Yes", status: false},
      'SMA-03-02':{id: "-02", label: "No", status: false},
    },
    'SMA-04': {
      'SMA-04-01':{id: "-01", label: "Yes", status: false},
      'SMA-04-02':{id: "-02", label: "No", status: false},
    },
    'SMA-05': {
      'SMA-05-01':{id: "-01", label: "Yes", status: false},
      'SMA-05-02':{id: "-02", label: "No", status: false},
    },
    'SMA-06': {
      'SMA-06-01':{id: "-01", label: "Yes", status: false},
      'SMA-06-02':{id: "-02", label: "No", status: false},
    },
  }