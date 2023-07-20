project_list = [["Bachelor Project", "P6.pdf", "Abstract:&emsp;Machine Reading Comprehension~(MRC) has a comprehension problem. Studies have shown that current state-of-the-art models are not able to perform realistically as well as they have done on benchmarks. This is due to various factors that imitate the concept of text comprehension but are not as flexible in their approach. In this paper, we argue how and why training datasets, and by extension computational models, are insufficient for the task of comprehension. We present five detailed criteria, which generally apply to any MRC dataset, and analyse to which extent current state-of-the-art datasets fulfill these criteria. These criteria are disincentivizing biases, adequate statistical power, grammar checking, verification, and robustness. We observe that many of the popular datasets fall short when being measured against these criteria. Moreover, we discuss what could have been improved in the creation of the popular SQuAD 2.0 dataset and how we would have ensured our own criteria in this process. We conclude that there is room for improvement in the overall creation of datasets, and we emphasize a greater focus, especially on biases and robustness."], 
	["DND homebrew Rulebook", "RuleBook.pdf", "This is rules for a Dungeon And Dragons"]
]

for(let i = 0; i < project_list.length; i++){
	let title = document.createElement("h2");
	let paragraph = document.createElement("p");
	let paragraph_clone = document.createElement("h2");
	
	title.innerHTML = project_list[i][0];
	paragraph.innerHTML = project_list[i][2];
	paragraph_clone.innerHTML = project_list[i][0];

	title.classList = "project_title";
	paragraph.classList = "project_title";
	paragraph_clone.classList = "project_title";

	title.onclick = () => {pipi(project_list[i][1])}
	paragraph.onclick = () => {pipi(project_list[i][1])};
	paragraph_clone.onclick = () => {pipi(project_list[i][1])};

	document.getElementById("project_display").appendChild(title);
	document.getElementById("project_display").appendChild(paragraph);
	document.getElementById("side_bar").appendChild(paragraph_clone);
}

function pipi(Filepath){
	// this code is from https://stackoverflow.com/questions/676705/changing-data-content-on-an-object-tag-in-html
	document.getElementById("pdf_viewer").setAttribute("data", Filepath);
	document.getElementById("fail_to_open").setAttribute("href", Filepath);
	document.getElementById("viewing_mode").style.display = "flex";
	document.getElementById("project_display").style.display = "none";
}
