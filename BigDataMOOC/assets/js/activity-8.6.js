var activity = [
  "<p>Check code below works in IPython – cut and paste and follow with two new lines. The code generates events between 110 and 140 GeV. It should produce the following figure:</p>",
  
  "<p><img src='/assets/img/IPython.png'></p>",
  
  "<p>This code corresponds to 42000 background events and 300 Higgs. Background is uniformly distributed and Higgs is a Normal (Gaussian) distribution centered at 126 with a width of 2.</p>",
  
  "<p>import numpy as np</br>import matplotlib.pyplot as plt</br>Base = 110 + 30* np.random.rand(42000)</br># Base is set of observations with an expected 2800 background events per bin</br># Note we assume here flat but in class I used a ''sloping'' curve that represented experiment better</br>gauss = 2 * np.random.randn(300) + 126</br># Gauss is Number of Higgs particles</br>simpletotal = np.concatenate((Base, gauss))</br># simpletotal is Higgs+Background</br>plt.figure('Total Wide Higgs Bin 2 GeV')</br>values, binedges, junk = plt.hist(simpletotal, bins=15, range =(110,140), alpha = 0.5, color='green')</br>centers = 0.5*(binedges[1:] + binedges[:-1])</br># centers is center of each bin</br># values is number of events in each bin</br># :-1 is same as :Largest Index-1</br># binedges[:-1] gets you lower limit of bin</br># 1: gives you array starts at second index (labelled 1 as first index 0)</br># binedges[1:] is upper limit of each bin</br># Note binedges has Number of Bins + 1 entries; centers has Number of Bins entries</br>errors =sqrt(values)</br># errors is expected error for each bin</br>plt.hist(Base, bins=15, range =(110,140), alpha = 0.5, color='blue')</br>plt.hist(gauss, bins=15, range =(110,140), alpha = 1.0, color='red')</br>plt.errorbar(centers, values, yerr = errors, ls='None', marker ='x', color = 'black', markersize= 6.0 )</br></p>",
  
  "<p><b>1.</b> Produce 2 more figures (plots) corresponding to experiments with a factor of 10 more or less data. Return the two new figures and your Python code as Homework. What do you conclude from these figures about the ability to see a Higgs particle with different amounts of data (corresponding to different lengths of time, experiment runs)?</p>",
  
  "<p><b>2</b> Look up 'Gaussian distribution' and why it is needed in this experiment.</p>",
  
  "<p><b>Assignment</b></p>",
  
  "<p>In the first X-Informatics use case, analysis of LHC data, we learned about: </br> a) The universality of \"Normal\" or \"Gaussian\" probability distribution for \"complicated\" situations </br> b) The typical error Square Root (Number of Events N) when Number of Events (N) are observed</p>",
  
  "<p>Please use any source (Internet, Books) to identify at least 5 other \"big\" or even \"little\" data X-Informatics examples where one or both of these (or some modestly modified) principles apply.</br>Describe these examples in a few sentences each, with a total of about one page.</p>"
];