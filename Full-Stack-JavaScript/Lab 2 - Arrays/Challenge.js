

function speakHacker(str) {
    return str
        .replace(/e/g, "3")
        .replace(/i/g, "1")
        .replace(/a/g, "4")
        .replace(/o/g, "0")
        .replace(/s/g, "5");
   }
   
   
   speakHacker("Long Weekend!") // L0ng W33k3nd!
   
   speakHacker("matrix 4 is coming out") //m4tr1x 4 15 c0m1ng 0ut
   
   speakHacker("marvel movies are delayed") //m4rv3l m0v135 4r3 d3l4y3d

   