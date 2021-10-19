import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
      home: Scaffold(
          body: CustomScrollView(
    slivers: <Widget>[
      SliverAppBar(
        pinned: true,
        expandedHeight: 300.0,
        backgroundColor: Colors.cyan,
        flexibleSpace: FlexibleSpaceBar(
          title: const Text("Israel Blancas @iblancasa"),
          background: Container(
            decoration: const BoxDecoration(
                image: DecorationImage(
                    image: AssetImage("assets/header.jpg"), fit: BoxFit.cover)),
          ),
        ),
      ),
      SliverList(delegate: SliverChildListDelegate(getGridChildren()))
    ],
  ))));
}

LayoutBuilder getGrid() {
  return LayoutBuilder(
      builder: (BuildContext context, BoxConstraints constraints) {
    return GridView.count(
      primary: false,
      padding: const EdgeInsets.all(20),
      crossAxisSpacing: 10,
      mainAxisSpacing: 10,
      crossAxisCount: getAxistCount(context),
      children: getGridChildren(),
    );
  });
}

int getAxistCount(BuildContext context) {
  if (MediaQuery.of(context).size.width >= 1024) {
    return 2;
  }
  return 1;
}

List<Widget> getGridChildren() {
  return [
    Card(
        shape: BeveledRectangleBorder(),
        margin: const EdgeInsets.all(15),
        elevation: 10,
        child: Padding(
            padding: EdgeInsets.all(20),
            child:
                Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(
                "Hi! Welcome to my website",
                style: TextStyle(fontSize: 50),
              ),
              Padding(
                  padding: EdgeInsets.fromLTRB(0, 5, 15, 0),
                  child: Text(
                    "I love all the things related to technology (specially, software development). For this reason, I spend my free time working on open source projects, attending to conferences or researching about new technologies. Linux, Python, Golang, Docker and GitHub user.",
                    overflow: TextOverflow.clip,
                    style: TextStyle(fontSize: 25),
                    textAlign: TextAlign.justify,
                  )),
            ]))),
    textCard("Title", "Subtitle", Icons.ac_unit),
    textCard("Title", "Subtitle", Icons.ac_unit),
    textCard("Title", "Subtitle", Icons.ac_unit),
    textCard("Title", "Subtitle", Icons.ac_unit),
    textCard("Title", "Subtitle", Icons.ac_unit),
    textCard("Title", "Subtitle", Icons.ac_unit),
    textCard("Title", "Subtitle", Icons.ac_unit),
    textCard("Title", "Subtitle", Icons.ac_unit),
    textCard("Title", "Subtitle", Icons.ac_unit),
    textCard("Title", "Subtitle", Icons.ac_unit),
    textCard("Title", "Subtitle", Icons.ac_unit),
    textCard("Title", "Subtitle", Icons.ac_unit),
    textCard("Title", "Subtitle", Icons.ac_unit),
    textCard("Title", "Subtitle", Icons.ac_unit),
  ];
}

AppBar appBar() {
  return AppBar(title: const Text("My application"), centerTitle: true);
}

Card textCard(String title, String subtitle, IconData icon) {
  return Card(
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
    margin: const EdgeInsets.all(15),
    elevation: 10,
    child: Column(
      children: <Widget>[
        ListTile(
          contentPadding: const EdgeInsets.fromLTRB(15, 10, 25, 10),
          title: Text(title),
          subtitle: Text(subtitle),
          leading: Icon(icon),
          onTap: () {}, // Keep the effect
        ),
      ],
    ),
  );
}
