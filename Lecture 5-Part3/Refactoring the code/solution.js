function main() {
    let yearData = {};
  
    let createPerYearData = (year, total) => {
      yearData[year] = total;
    };
  
    let printReport = () => {
      console.log("Print Report");
    };
  
    let calculateTotalTillDate = (perYearBalance) => {
      let total = 0;
      for (let i = 0; i < perYearBalance.length; i++) {
        total += perYearBalance[i];
      }
      return total;
    };
  
    let adjustTotalOfYear = (year, adjustmentFactor) => {
      yearData[year] *= adjustmentFactor;
    };
    return {
      createPerYearData,
      printReport,
      calculateTotalTillDate,
      adjustTotalOfYear
    };
  }
  