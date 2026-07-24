const word = document.getElementById("word");
        const meaning = document.getElementById("meaning");
        async function getData() {
            try {
                let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value.trim()}`);
                let d = await data.json();
                meaning.innerHTML = d[0].meanings[0].definitions[0].definition;
            }
            catch {
                meaning.innerHTML = "no meaning found";
                // meaning.style.fontSize="25px";

            }
        }