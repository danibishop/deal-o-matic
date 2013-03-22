/**
  * HIRE ME ALGORITHM
  *
  * Important:  This is not a functional code (by now)
  *             I am using Javascript as a pseudocode (a sort of...), so you can't
  *             execute this code (unless you define all the needed elements :D)
  **/

var me = DaniBishop();
me.needsMoney = ALMOST_ALWAYS;

var you = Customer();
you.areAwesome = true;
you.willPay = true;

if (!you.willPay)
   you.willPay = true; // Just in case

var problem = Specifications();
var offer = Offer(problem);

problem.setStart(START_DATE);
problem.setEnd(END_DATE);

you.sendEmail({
	to:me,
    offer: offer,
    success: function() {
    	dealBreak = false;
    	while ((me.setPrice() != you.setPrice()) && !dealBreak)
    	{
    		me.revisePrice(you.price);
    		you.revisePrice(me.price);
    		dealBreak = (!me.want || !you.want);
    	}

    	if (dealBreak)
    	{
    		me.send(you, "Thanks anyway! Keep in touch for next projects!")
    	}
    	else
    	{
    		me.solveProblem({
    			input: offer.problem,
    			success: function(solution) {
    				you.happy = true;
    				you.littleLessRicher = true;

    				me.happy = true;
    				me.littleMoreRicher = true;

    				you.customers.happiness += A_LOT;

 					// Not hard to accomplish
    				solution.code = BETTER_THAN_THIS_SILLY_EXAMPLE;
    			}
    		}); // No need to define failure
    	}

   }
});