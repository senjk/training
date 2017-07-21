   
        var result = "";
        var jsresult = "";
        var judge = 0;
        var equal = 0;
        var first = 0;
        zeros = 0;
        function js() {
          
            var events = event.srcElement.innerText;
           
            if ("=" == events) {
                jsresult = eval(result);
                document.getElementById('jsdata').innerText = jsresult;
                first = 0;
                zeros = 0;
                return;
            }
            if ("c" == events) {
                document.getElementById('jsdata').innerText = "0";
                result = "";
                first = 0;
                return;
            }

            if ("0" == result) {
                result = events;
            }
            else {

                if (events != "0") {
                    result += events;
                    first = 1;
                    if (events == "+" || events == "-" || events == "*" || events == "/"||events =="%") {
                        first = 0;
                    }
                    zeros = 0;
                }
                else {
                    if (first == 0) {
                        if (zeros == 0)
                            result += events;
                    }
                    if (first == 1) {
                        result += events;
                    }
                    zeros = 1;
                }
            }
        
            document.getElementById('jsdata').innerText = result;
   
           }

