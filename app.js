const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const port = process.env.PORT || 3200

app.use(bodyparser.json())
app.use(
  bodyparser.urlencoded({
    extended: false
  })
)

app.get('/get_trigger/:trigger_id/:member_id', (req, res) => {
  res.status(200).send([
    /**
    *  Getting Provider Info
    */
    {
      task: {
        id: 35,
        origId: 'A490.0',
        suppressed: false,
        suppressionPeriod: '',
        expirationDate: '2020-12-31T12:00:00.000Z',
        close: 'HARD',
        reminderInitiation: 'P15D',
        reminderFrequency: 'R/P15D',
        escalationTimer: 'P30D',
        description: 'Getting provider info'
      },
      assignment: {
        actor: 'Peter',
        channel: 'MCC',
        escalationActor: 'Patricia',
        escalationChannel: 'CCN'
      },
      reminder: {
        address: 'peter@doctor.com',
        body: 'XYZ',
        from: 'PHM@health_insurance.com',
        subject: 'Reminder'
      }
    },
    /**
    *  Getting Community Health Worker Info
    */
    {
      task: {
        id: 58,
        origId: 'B143',
        suppressed: false,
        suppressionPeriod: '',
        expirationDate: '2020-12-31T12:00:00.000Z',
        close: 'HARD',
        reminderInitiation: 'P30D',
        reminderFrequency: 'R/P30D',
        //        reminderInitiation : 'PT60S',
        //        reminderFrequency : 'R/PT60S',
        escalationTimer: 'P90D',
        //        escalationTimer : 'PT60S',
        description: 'Getting Community Info'
      },
      assignment: {
        actor: 'Charlie',
        channel: 'CCN',
        escalationActor: 'Marc',
        escalationChannel: 'CCN'
      },
      reminder: {
        address: 'charlie@health_insurance.com',
        body: 'XYZ',
        from: 'PHM@health_insurance.com',
        subject: 'Reminder'
      }
    },
    /**
    *  Getting Member Info
    */
    {
      task: {
        id: 128,
        origId: 'C201',
        predecessor: 'A490.0',
        suppressed: false,
        suppressionPeriod: '',
        expirationDate: '2020-12-31T12:00:00.000Z',
        close: 'SOFT',
        reminderInitiation: 'P7D',
        reminderFrequency: 'R/P7D',
        escalationTimer: 'P30D',
        description: 'Getting member info'
      },
      assignment: {
        actor: 'Mary',
        channel: 'MLP',
        escalationActor: 'Charlie',
        escalationChannel: 'CCN'
      },
      reminder: {
        address: 'mary@mail.com',
        body: 'XYZ',
        from: 'PHM@health_insurance.com',
        subject: 'Reminder'
      }
    },
    /**
    *  Getting Pharmacist Info
    */
    {
              task: {
                id: 112,
                origId: 'C178',
                predecessor: 'A490.0',
                suppressed: false,
                suppressionPeriod: '',
                expirationDate: '2020-12-31T12:00:00.000Z',
                close: 'SOFT',
                reminderInitiation: 'P7D',
                reminderFrequency: 'R/P7D',
                escalationTimer: 'P30D',
                description: 'Geting member info'
              },
              assignment: {
                actor: 'Robert',
                channel: 'CCN',
                escalationActor: 'Matthew',
                escalationChannel: 'CCN'
              },
              reminder: {
                address: 'robert@pharmacy.com',
                body: 'XYZ',
                from: 'PHM@health_insurance.com',
                subject: 'Reminder'
              }
    }
  ])
})

app.listen(port, () => {
  console.log(`running at port ${port}`)
})
