const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
        branch: {
            type: String,
            required: true
        },
        eligibility: {
            type: String
        },
        userID: {
         type: String
        },
        status: {
          type: String
        },
        childrenIds: {
          type: [String]
        },
        childOneName: {
            type: String
        },
        childOneID: {
            type: String
        },
        childTwoName: {
            type: String
        },
        childTwoID: {
            type: String
        },
        childThreeName: {
            type: String
        },
        childThreeID: {
            type: String
        },
        childFourName: {
            type: String
        },
        childFourID: {
            type: String
        },
        childFiveName: {
            type: String
        },
        childFiveID: {
            type: String
        },
        childSixName: {
            type: String
        },
        childSixID: {
            type: String
        },
        childIncome: {
            type: String
        },
        childIncomeFreq: {
            type: String
        }, 
        HouseholdMemberOneName: {
            type: String
        },
        HouseholdMemberOneWorkEarnings: {
            type: String
        },
        HouseholdMemberOneWelfare_Alimony_CS: {
            type: String
        },
        HouseholdMemberOneSSPR: {
            type: String
        },
        HouseholdMemberOneOther: {
            type: String
        },
        HouseholdMemberTwoName: {
            type: String
        },
        HouseholdMemberTwoWorkEarnings: {
            type: String
        },
        HouseholdMemberTwoWelfare_Alimony_CS: {
            type: String
        },
        HouseholdMemberTwoSSPR: {
            type: String
        },
        HouseholdMemberTwoOther: {
            type: String
        },
        HouseholdMemberThreeName: {
            type: String
        },
        HouseholdMemberThreeWorkEarnings: {
            type: String
        },
        HouseholdMemberThreeWelfare_Alimony_CS: {
            type: String
        },
        HouseholdMemberThreeSSPR: {
            type: String
        },
        HouseholdMemberThreeOther: {
            type: String
        },
        HouseholdMemberFourName: {
            type: String
        },
        HouseholdMemberFourWorkEarnings: {
            type: String
        },
        HouseholdMemberFourWelfare_Alimony_CS: {
            type: String
        },
        HouseholdMemberFourSSPR: {
            type: String
        },
        HouseholdMemberFourOther: {
            type: String
        },
        HouseholdMemberFiveName: {
            type: String
        },
        HouseholdMemberFiveWorkEarnings: {
            type: String
        },
        HouseholdMemberFiveWelfare_Alimony_CS: {
            type: String
        },
        HouseholdMemberFiveSSPR: {
            type: String
        },
        HouseholdMemberFiveOther: {
            type: String
        },
        HouseholdMemberSixName: {
            type: String
        },
        HouseholdMemberSixWorkEarnings: {
            type: String
        },
        HouseholdMemberSixWelfare_Alimony_CS: {
            type: String
        },
        HouseholdMemberSixSSPR: {
            type: String
        },
        HouseholdMemberSixOther: {
            type: String
        },
        totalHouseHoldIncome: {
            type: Number
        },
        totalHouseHoldMembers: {
           type: String
        },
        ssn: {
            type: String
        },
        signature: {
            type: String
        },
        signDate: {
            type: String
        },
        detOfficialSignDate: {
            type: String
        },
        detOfficialSignature: {
            type: String
        },
        conOfficialSignDate: {
            type: String
        },
        conOfficialSignature: {
            type: String
        },
        folOfficialSignDate: {
            type: String
        },
        folOfficialSignature: {
            type: String
        },
        printName: {
            type: String
        },
        date: { 
            type: String
        },
        address: {
            type: String
        },
        city: {
            type: String
        },
        zipCode: {
            type: String
        },
        phoneNumber: {
            type: String
        },
        state: {
            type: String
        },
        childOneHeadStart: {
            type: Boolean
        },
        childOneForsterChild: {
            type: Boolean
        },
        childOneMigrant: {
           type: Boolean
        },
        childOneRunaway: {
            type: Boolean
        },
        childOneHomeless: {
            type: Boolean
        },
        childTwoHeadStart: {
            type: Boolean
        },
        childTwoForsterChild: {
            type: Boolean
        },
        childTwoMigrant: {
           type: Boolean
        },
        childTwoRunaway: {
            type: Boolean
        },
        childTwoHomeless: {
            type: Boolean
        },
        childThreeHeadStart: {
            type: Boolean
        },
        childThreeForsterChild: {
            type: Boolean
        },
        childThreeMigrant: {
           type: Boolean
        },
        childThreeRunaway: {
            type: Boolean
        },
        childThreeHomeless: {
            type: Boolean
        },
        childFourHeadStart: {
            type: Boolean
        },
        childFourForsterChild: {
            type: Boolean
        },
        childFourMigrant: {
           type: Boolean
        },
        childFourRunaway: {
            type: Boolean
        },
        childFourHomeless: {
            type: Boolean
        },
        childFiveHeadStart: {
            type: Boolean
        },
        childFiveForsterChild: {
            type: Boolean
        },
        childFiveMigrant: {
           type: Boolean
        },
        childFiveRunaway: {
            type: Boolean
        },
        childFiveHomeless: {
            type: Boolean
        },
        childSixHeadStart: {
            type: Boolean
        },
        childSixForsterChild: {
            type: Boolean
        },
        childSixMigrant: {
           type: Boolean
        },
        childSixRunaway: {
            type: Boolean
        },
        childSixHomeless: {
            type: Boolean
        },
        beforeAfterCare: {
            type: Boolean
        },
        dayCenterSunday: {
            type: Boolean
        },
        dayCenterMonday: {
            type: Boolean
        },
        dayCenterTuesday: {
            type: Boolean
        },
        dayCenterWednesday: {
            type: Boolean
        },
        dayCenterThursday: {
            type: Boolean
        },
        dayCenterFriday: {
            type: Boolean
        },
        dayCenterSaturday: {
            type: Boolean
        },
        breakFast: {
            type: Boolean
        },
        snackLunch: {
            type: Boolean
        },
        snackPM: {
            type: Boolean
        },
        supper: {
            type: Boolean
        },
        snack: {
            type: Boolean
        },
        latino: {
            type: Boolean
        },
        nonLatino: {
            type: Boolean
        },
        asian: {
            type: Boolean
        },
        black: {
            type: Boolean
        },
        white: {
            type: Boolean
        },
        indian: {
            type: Boolean
        },
        hawaiian: {
            type: Boolean
        },
        HouseholdMemberHowOften: {
            type: String
        },
        timeFrom: {
            type: String
        },
        timeFromHour: {
            type: String
        },
        timeTo: {
            type: String
        },
        timeToHour: {
            type: String
        },
        childOneAge: {
            type: String
        },
        childTwoAge: {
            type: String
        },
        childThreeAge: {
            type: String
        },
        childFourAge: {
            type: String
        },
        childFiveAge: {
            type: String
        },
        childSixAge: {
            type: String
        },
        memberOneIncomeFreq: {
            type: String
        },
        memberTwoIncomeFreq: {
            type: String
        },
        memberThreeIncomeFreq: {
            type: String
        },
        memberFourIncomeFreq: {
            type: String
        },
        memberFiveIncomeFreq: {
            type: String
        },
        memberSixIncomeFreq: {
            type: String
        }
}, { timestamps: true});

module.exports = mongoose.model('clients', clientSchema);
