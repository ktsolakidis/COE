const centerScopeArticle = document.querySelector('#center--scope--article')
const centerScopeButton= document.querySelector('#center--scope--button')


const wholeText = `Oligonucleotide-based therapeutics are emerging as important tools to treat human diseases ranging in scope from corrections of metabolic perturbations and cardiovascular, muscular, and neurological diseases to control of cell growth in cancer, and from regulation of the immune system to modulation of host-pathogen interactions. A major challenge impeding widespread implementation of oligonucleotide therapeutics is their inefficient intracellular delivery: typically, only ~5% escape from endosomes. Fundamental understanding of escape mechanisms, currently lacking, is needed to overcome this significant bottleneck. <br><br>
To resolve this problem, the Nordisk Foundation Center for optimized Oligo Escape and Control of Disease will provide mechanistic understanding of how RNA and other oligonucleotides ("oligos") can pass from endosomes to cytosol and will develop methods for efficient intracellular delivery. Applicability of the research to combat disease will be demonstrated by targeting therapeutic oligos to correct pathologies in skeletal and cardiac muscle cells and metabolic perturbations in pancreatic cells.
Recent transformative advances in oligo engineering, advanced optical microscopy and computational methods provide an extraordinary opportunity to propel the field of delivery of oligonucleotides into a new era of discovery, understanding, and application. As a multidisciplinary environment for research, teaching and learning with worldwide impact, the Center will create an innovative next-generation program combining novel oligo conjugate design for improved intracellular delivery with cell biology discovery of endosomal escape. <br><br>
The Center is located at the University of Copenhagen with two satellite laboratories, one at Harvard Medical School & Boston Children’s Hospital, the other at Instituto de Medicina Molecular, University of Lisbon. <br><br>
Nikos Hatzakis’s group and the Harvard Medical School researchers (led by Tom Kirchhausen) will conduct in-depth studies with advanced microscopes of how the endosomes open and why the oligonucleotides are still stuck inside. They will directly observe the interactions between endosomes and oligonucleotides, study how the endosomes move in cells and use artificial intelligence for the analytical part of the research.
This knowledge will then be used by researchers at the Department of Chemistry of the University of Copenhagen (led by Knud Jensen and Nikos Hatzakis) to design oligonucleotides that do not clump together in the endosomes and are therefore more easily released into the cells. <br><br>
Finally, the researchers from Portugal (led by Maria Carmo Fonseca) will use the overall understanding of the interactions between endosomes and oligonucleotides to develop a treatment for people with cardiomyopathy.
This treatment will be studied first in human heart cells and then in mice, but the goal is for it to progress all the way to human clinical trials.
`



const smallText = `Oligonucleotide-based therapeutics are emerging as important tools to treat human diseases ranging in scope from corrections of metabolic perturbations and cardiovascular, muscular, and neurological diseases to control of cell growth in cancer, and from regulation of the immune system to modulation of host-pathogen interactions. A major challenge impeding widespread implementation of oligonucleotide therapeutics is their inefficient intracellular delivery: typically, only ~5% escape from endosomes. Fundamental understanding of escape mechanisms, currently lacking, is needed to overcome this significant bottleneck. <br><br>
To resolve this problem, the Nordisk Foundation Center for optimized Oligo Escape and Control of Disease will provide mechanistic understanding of how RNA and other oligonucleotides ("oligos") can pass from endosomes to cytosol and will develop methods for efficient intracellular delivery. Applicability of the research to combat disease will be demonstrated by targeting therapeutic oligos to correct pathologies in skeletal and cardiac muscle cells and metabolic perturbations in pancreatic cells.
`

let articleIsClosed = true;



const toggleScopeArticle = () => {

    if(articleIsClosed){
        centerScopeArticle.innerHTML = wholeText;
        centerScopeButton.innerHTML = 'Read Less'

        articleIsClosed = false;
    }else{
        centerScopeArticle.innerHTML = smallText;
        centerScopeButton.innerHTML = 'Continue Reading'

        articleIsClosed = true;
    }

    

}


centerScopeButton.addEventListener('click',toggleScopeArticle);