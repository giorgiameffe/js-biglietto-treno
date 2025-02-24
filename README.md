# Biglietto del treno 

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

# Svolgimento 

- chiedere all'utente quanti chilometri ha intenzione di percorrere 
- chiedere all'utente quanti anni ha 
- definire il prezzo pieno del biglietto 
- calcolare il prezzo scontato del biglietto in relazione all'età e alla fascia di sconto cui appartiene 
  - se l'età è minore di 18 
     - calcolo il prezzo finale tenendo conto della percentuale di sconto del 20%
   - altrimenti se l'età è maggiore di 65
     - calcolo il prezzo finale tenendo conto della percentuale di sconto del 40%
  - altrimenti 
     - il prezzo finale corrisponde al prezzo pieno senza percentuale di sconto
- ridurre la cifra ottenuta ad un valore con massimo due decimali
  - stampo nella console l'operazione
    
 