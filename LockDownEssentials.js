///NAME :SAVITA SHARMA
//PROGRAM :8110 Section 1
const Order = require("./Order");
const OrderState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    BROOMS: Symbol("BROOMS"),
    DUSTBINS: Symbol("DUSTBINS"),
    LIGHTS: Symbol("lightbulbs"),
    FILTERS: Symbol("filters"),
    UPSELL: Symbol("UPSELL"),
    EARBUDS: Symbol("earbuds"),
    SNOW_SHOVELS: Symbol("SNOW_SHOVELS"),
});

module.exports = class LockDownEssentials  extends Order {
    constructor(sNumber, sUrl) {
        super(sNumber, sUrl);
        this.stateCur = OrderState.WELCOMING;
        this.sBROOMS = "";
        this.sDUSTBINS = "";
        this.sLights = "";
        this.sFilters = "";
        this.sEarbuds = "";
        this.sSNOW_SHOVELS = "";
    }
    handleInput(sInput) {
        let aReturn = [];
        let myTotal = 0;
        let Total = 0;
        switch (this.stateCur) {
            case OrderState.WELCOMING:
                this.stateCur = OrderState.BROOMS;
                aReturn.push("Welcome to savi's Hardware Store.");
                aReturn.push(`Check our flyer below`);
                aReturn.push(`${this.sUrl}/payment/${this.sNumber}/`);
                aReturn.push("Would you like buy a BROOMS?");
                break;
            case OrderState.BROOMS:
                if (sInput.toLowerCase() != "no" && sInput.toLowerCase() != "yes") {
                    aReturn.push("Please Reply with yes or no only.!");
                } else {
                    this.stateCur = OrderState.DUSTBINS;
                    if (sInput.toLowerCase() != "no") {
                        this.sBROOMS = sInput;
                    }
                    aReturn.push("WOULD YOU LIKE TO  BUY A HOUSEHOLD DUSTBINS?");
                }
                break;
            case OrderState.DUSTBINS:
                if (sInput.toLowerCase() != "no" && sInput.toLowerCase() != "yes") 
                {
                    aReturn.push("Please Reply with 'yes' or 'no' only.!");
                } else {
                    this.stateCur = OrderState.LIGHTS;
                    if (sInput.toLowerCase() != "no") {
                        this.sDUSTBINS = sInput;
                    }
                    aReturn.push("Would you like buy a Light Bulbs?");
                }
                break;
            case OrderState.LIGHTS:
                if (sInput.toLowerCase() != "no" && sInput.toLowerCase() != "yes") 
                {
                    aReturn.push("Please Reply with yes or no only.!");
                } 
                else 
                {
                    this.stateCur = OrderState.FILTERS;
                    if (sInput.toLowerCase() != "no") {
                        this.sLights = sInput;
                    }
                    aReturn.push("Would you like buy a Furnace Filters?");
                }
                break;
            case OrderState.FILTERS:
                if (sInput.toLowerCase() != "no" && sInput.toLowerCase() != "yes") {
                    aReturn.push("Please Reply with yes or no only.!");
                } else {
                    this.stateCur = OrderState.EARBUDS;
                    if (sInput.toLowerCase() != "no") {
                        this.sFilters = sInput;
                    }
                    aReturn.push("Would you like buy an Earbuds?");
                }
                break;
            case OrderState.EARBUDS:
                if (sInput.toLowerCase() != "no" && sInput.toLowerCase() != "yes") {
                    aReturn.push("Please Reply with yes or no only.!");
                } else {
                    this.stateCur = OrderState.SNOW_SHOVELS;
                    if (sInput.toLowerCase() != "no") {
                        this.sEarbuds = sInput;
                    }
                    aReturn.push("Would you like buy Snow showels?");
                }
                break;
            case OrderState.SNOW_SHOVELS:
                if (sInput.toLowerCase() != "no") {
                    this.sSNOW_SHOVELS = sInput;
                }
                aReturn.push("Thank-you Your Order is");
                if (this.sBROOMS) {
                    myTotal += 10.00;
                    aReturn.push("BROOMS Container For: $10.00");
                }
                if (this.sDUSTBINS) {
                    myTotal += 4.00;
                    aReturn.push("HouseHold DUSTBINS For: $4.00");

                }
                if (this.sLights) {
                    myTotal += 3.50; 
                    aReturn.push("Do you want to illuminate your house ");

                    aReturn.push("Light-Bulbs For: $3.50");

                }
                if (this.sFilters) {
                    myTotal += 23.99;
                    aReturn.push("Do you want to clean your kitchen");
                    aReturn.push("Furnace Filters For: $23.99");
                }
                if (this.sEarbuds) {
                    myTotal += 3.99;
                    aReturn.push("Do you want to clean your earbuds");
                    aReturn.push("Ear buds For: $3.99");
                }
                if (this.sSNOW_SHOVELS) {
                    myTotal += 14.99;
                    aReturn.push("Snow Shovels For: $14.99");

                }
                let tax = myTotal * 0.15;
                Total = myTotal + tax;
                aReturn.push(`Total  Amount will be (tax Inc.) $ ${Total.toFixed(2)}`);
                aReturn.push(`You will get a call from 123-123-1223 when order is done.`)
                this.isDone(true);
                break;
        }
        return aReturn;
    }

    renderForm(){
      // your client id should be kept private
      return(`
      <html>
      <head>
          <meta content="text/html; charset=UTF-8" http-equiv="content-type">
          <style type="text/css">
              ol {
                  margin: 0;
                  padding: 0
              }
      
              table td,
              table th {
                  padding: 0
              }
      
              .c1 {
                  border-right-style: solid;
                  padding: 5pt 5pt 5pt 5pt;
                  border-bottom-color: #000000;
                  border-top-width: 1pt;
                  border-right-width: 1pt;
                  border-left-color: #000000;
                  vertical-align: top;
                  border-right-color: #000000;
                  border-left-width: 1pt;
                  border-top-style: solid;
                  border-left-style: solid;
                  border-bottom-width: 1pt;
                  width: 234pt;
                  border-top-color: #000000;
                  border-bottom-style: solid
              }
      
              .c13 {
                  color: #000000;
                  font-weight: 400;
                  text-decoration: none;
                  vertical-align: baseline;
                  font-size: 36pt;
                  font-family: "Arial";
                  font-style: normal
              }
      
              .c0 {
                  color: #000000;
                  font-weight: 400;
                  text-decoration: none;
                  vertical-align: baseline;
                  font-size: 26pt;
                  font-family: "Arial";
                  font-style: normal
              }
      
              .c2 {
                  color: #000000;
                  font-weight: 400;
                  text-decoration: none;
                  vertical-align: baseline;
                  font-size: 11pt;
                  font-family: "Arial";
                  font-style: normal
              }
      
              .c9 {
                  padding-top: 12pt;
                  padding-bottom: 0pt;
                  line-height: 1.0;
                  orphans: 2;
                  widows: 2;
                  text-align: left;
                  height: 11pt
              }
      
              .c12 {
                  padding-top: 12pt;
                  padding-bottom: 0pt;
                  line-height: 1.0;
                  orphans: 2;
                  widows: 2;
                  text-align: left
              }
      
              .c3 {
                  padding-top: 0pt;
                  padding-bottom: 0pt;
                  line-height: 1.15;
                  orphans: 2;
                  widows: 2;
                  text-align: left
              }
      
              .c10 {
                  padding-top: 0pt;
                  padding-bottom: 0pt;
                  line-height: 1.0;
                  orphans: 2;
                  widows: 2;
                  text-align: left
              }
      
              .c4 {
                  padding-top: 0pt;
                  padding-bottom: 7pt;
                  line-height: 1.15;
                  orphans: 2;
                  widows: 2;
                  text-align: right
              }
      
              .c8 {
                  padding-top: 0pt;
                  padding-bottom: 7pt;
                  line-height: 1.15;
                  orphans: 2;
                  widows: 2;
                  text-align: left
              }
      
              .c11 {
                  border-spacing: 0;
                  border-collapse: collapse;
                  margin-right: auto
              }
      
              .c5 {
                  background-color: #ffffff;
                  max-width: 468pt;
                  padding: 72pt 72pt 72pt 72pt
              }
      
              .c6 {
                  height: 48.2pt
              }
      
              .c7 {
                  height: 52pt
              }
      
              .c15 {
                  font-size: 26pt
              }
      
              .c14 {
                  height: 11pt
              }
      
              .title {
                  padding-top: 0pt;
                  color: #000000;
                  font-size: 26pt;
                  padding-bottom: 3pt;
                  font-family: "Arial";
                  line-height: 1.15;
                  page-break-after: avoid;
                  orphans: 2;
                  widows: 2;
                  text-align: left
              }
      
              .subtitle {
                  padding-top: 0pt;
                  color: #666666;
                  font-size: 15pt;
                  padding-bottom: 16pt;
                  font-family: "Arial";
                  line-height: 1.15;
                  page-break-after: avoid;
                  orphans: 2;
                  widows: 2;
                  text-align: left
              }
      
              li {
                  color: #000000;
                  font-size: 11pt;
                  font-family: "Arial"
              }
      
              p {
                  margin: 0;
                  color: #000000;
                  font-size: 11pt;
                  font-family: "Arial"
              }
      
              h1 {
                  padding-top: 20pt;
                  color: #000000;
                  font-size: 20pt;
                  padding-bottom: 6pt;
                  font-family: "Arial";
                  line-height: 1.15;
                  page-break-after: avoid;
                  orphans: 2;
                  widows: 2;
                  text-align: left
              }
      
              h2 {
                  padding-top: 18pt;
                  color: #000000;
                  font-size: 16pt;
                  padding-bottom: 6pt;
                  font-family: "Arial";
                  line-height: 1.15;
                  page-break-after: avoid;
                  orphans: 2;
                  widows: 2;
                  text-align: left
              }
      
              h3 {
                  padding-top: 16pt;
                  color: #434343;
                  font-size: 14pt;
                  padding-bottom: 4pt;
                  font-family: "Arial";
                  line-height: 1.15;
                  page-break-after: avoid;
                  orphans: 2;
                  widows: 2;
                  text-align: left
              }
      
              h4 {
                  padding-top: 14pt;
                  color: #666666;
                  font-size: 12pt;
                  padding-bottom: 4pt;
                  font-family: "Arial";
                  line-height: 1.15;
                  page-break-after: avoid;
                  orphans: 2;
                  widows: 2;
                  text-align: left
              }
      
              h5 {
                  padding-top: 12pt;
                  color: #666666;
                  font-size: 11pt;
                  padding-bottom: 4pt;
                  font-family: "Arial";
                  line-height: 1.15;
                  page-break-after: avoid;
                  orphans: 2;
                  widows: 2;
                  text-align: left
              }
      
              h6 {
                  padding-top: 12pt;
                  color: #666666;
                  font-size: 11pt;
                  padding-bottom: 4pt;
                  font-family: "Arial";
                  line-height: 1.15;
                  page-break-after: avoid;
                  font-style: italic;
                  orphans: 2;
                  widows: 2;
                  text-align: left
              }
          </style>
      </head>
      
      <body class="c5">
          <p class="c3"><span
                  class="c2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </p>
          <p class="c10"><span class="c0">For curbside pickup:</span></p>
          <p class="c12"><span class="c15">Text &ldquo;meow&rdquo; or &ldquo;woof&rdquo; to </span><span
                  class="c13">519-111-1111</span></p>
          <p class="c9"><span class="c2"></span></p><a id="t.d97173251f8e8de98f4d2ef9884eaa81e39c959c"></a><a id="t.0"></a>
          <table class="c11">
              <tbody>
                  <tr class="c7">
                      <td class="c1" colspan="1" rowspan="1">
                          <p class="c8"><span class="c0">Iams Dog Food 10 kg</span></p>
                          <p class="c3"><span
                                  class="c2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                          </p>
                      </td>
                      <td class="c1" colspan="1" rowspan="1">
                          <p class="c4">
                              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                                  class="c0">5.99</span></p>
                          <p class="c3"><span
                                  class="c2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                          </p>
                      </td>
                  </tr>
                  <tr class="c6">
                      <td class="c1" colspan="1" rowspan="1">
                          <p class="c8"><span class="c0">Iams Cat Food 1kg</span></p>
                          <p class="c3"><span
                                  class="c2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                          </p>
                      </td>
                      <td class="c1" colspan="1" rowspan="1">
                          <p class="c4">
                              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                                  class="c0">2.99</span></p>
                          <p class="c3"><span
                                  class="c2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                          </p>
                      </td>
                  </tr>
                  <tr class="c6">
                      <td class="c1" colspan="1" rowspan="1">
                          <p class="c8"><span class="c0">Organic Kitty Litter 5kg</span></p>
                          <p class="c3"><span
                                  class="c2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                          </p>
                      </td>
                      <td class="c1" colspan="1" rowspan="1">
                          <p class="c4">
                              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                                  class="c0">2.99</span></p>
                          <p class="c3"><span
                                  class="c2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                          </p>
                      </td>
                  </tr>
              </tbody>
          </table>
          <p class="c9"><span class="c2"></span></p>
          <p class="c12"><span class="c0">We also have a selection of toys, treats and other pet-cessities.</span></p>
          <p class="c3 c14"><span class="c2"></span></p>
      </body>
      
      </html>      `);
  
    }
}
