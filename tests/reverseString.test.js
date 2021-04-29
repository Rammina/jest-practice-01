//reverses a string's character order
const reverseString = require("../functions/reverseString");

test("it returns a string", () => {
  expect(typeof reverseString("hello world")).toBe("string");
});

test("input 'hello' outputs 'olleh'", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("input 'May' outputs 'yaM'", () => {
  expect(reverseString("May")).toBe("yaM");
});

test("input '12 34 56 and 78 9' outputs '9 87 dna 65 43 21'", () => {
  expect(reverseString("12 34 56 and 78 9")).toBe("9 87 dna 65 43 21");
});

test("input 'Im f!@king back' outputs 'kcab gnik@!f mI'", () => {
  expect(reverseString("Im f!@king back")).toBe("kcab gnik@!f mI");
});

test("input 'Lorem ipsum dolor 694 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas. Gravida in fermentum et sollicitudin. Non consectetur a erat nam. Eu lobortis elementum nibh tellus molestie. Id volutpat lacus laoreet non. Neque vitae tempus quam pellentesque nec nam aliquam sem. Risus in hendrerit gravida rutrum. Vitae proin sagittis nisl rhoncus mattis rhoncus. Maecenas pharetra convallis posuere morbi leo. Odio eu feugiat pretium nibh ipsum consequat nisl. Tincidunt eget nullam non nisi. Porttitor lacus luctus accumsan tortor. Ut etiam sit amet nisl purus in mollis. Fermentum dui faucibus in ornare quam. Rhoncus urna neque viverra justo.' outputs '.otsuj arreviv euqen anru sucnohR .mauq eranro ni subicuaf iud mutnemreF .sillom ni surup lsin tema tis maite tU .rotrot nasmucca sutcul sucal rotittroP .isin non mallun tege tnudicniT .lsin tauqesnoc muspi hbin muiterp taiguef ue oidO .oel ibrom ereusop sillavnoc arterahp saneceaM .sucnohr sittam sucnohr lsin sittigas niorp eatiV .murtur adivarg tirerdneh ni susiR .mes mauqila man cen euqsetnellep mauq supmet eativ euqeN .non teeroal sucal taptulov dI .eitselom sullet hbin mutnemele sitrobol uE .man tare a rutetcesnoc noN .niduticillos te mutnemref ni adivarG .saneceam arreviv odommoc susir leV .auqila angam erolod te erobal tu tnudidicni ropmet domsuie od des ,tile gnicsipida rutetcesnoc ,tema tis 496 rolod muspi meroL'", () => {
  expect(
    reverseString(
      "Lorem ipsum dolor 694 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas. Gravida in fermentum et sollicitudin. Non consectetur a erat nam. Eu lobortis elementum nibh tellus molestie. Id volutpat lacus laoreet non. Neque vitae tempus quam pellentesque nec nam aliquam sem. Risus in hendrerit gravida rutrum. Vitae proin sagittis nisl rhoncus mattis rhoncus. Maecenas pharetra convallis posuere morbi leo. Odio eu feugiat pretium nibh ipsum consequat nisl. Tincidunt eget nullam non nisi. Porttitor lacus luctus accumsan tortor. Ut etiam sit amet nisl purus in mollis. Fermentum dui faucibus in ornare quam. Rhoncus urna neque viverra justo."
    )
  ).toBe(
    ".otsuj arreviv euqen anru sucnohR .mauq eranro ni subicuaf iud mutnemreF .sillom ni surup lsin tema tis maite tU .rotrot nasmucca sutcul sucal rotittroP .isin non mallun tege tnudicniT .lsin tauqesnoc muspi hbin muiterp taiguef ue oidO .oel ibrom ereusop sillavnoc arterahp saneceaM .sucnohr sittam sucnohr lsin sittigas niorp eatiV .murtur adivarg tirerdneh ni susiR .mes mauqila man cen euqsetnellep mauq supmet eativ euqeN .non teeroal sucal taptulov dI .eitselom sullet hbin mutnemele sitrobol uE .man tare a rutetcesnoc noN .niduticillos te mutnemref ni adivarG .saneceam arreviv odommoc susir leV .auqila angam erolod te erobal tu tnudidicni ropmet domsuie od des ,tile gnicsipida rutetcesnoc ,tema tis 496 rolod muspi meroL"
  );
});
