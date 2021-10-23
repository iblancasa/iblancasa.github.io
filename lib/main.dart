import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:flutter/gestures.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:flutter_fadein/flutter_fadein.dart';
import 'package:flip_card/flip_card.dart';

// Starts the APP
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: "Israel Blancas - iblancasa",
      home: HomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          title: const Text('Israel Blancas - iblancasa'),
        ),
        body: ListView(
          children: <Widget>[
            getCard(context),
          ],
        ));
  }

  Widget getCard(BuildContext context) {
    return FlipCard(
      fill: Fill.fillBack,
      direction: FlipDirection.HORIZONTAL,
      front: myCard(context),
      back: myCard(context),
    );
  }

  Card myCard(BuildContext context) {
    Flex myWidget;

    // Create a Row or a Column depending on the device width
    var width = MediaQuery.of(context).size.width;
    if (width > 450) {
      myWidget = Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: getButtons(),
      );
    } else {
      myWidget = Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: getButtons(),
      );
    }

    return Card(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
      margin: const EdgeInsets.all(15),
      elevation: 10,
      child: Column(
        children: <Widget>[
          const FadeIn(
              curve: Curves.easeIn,
              duration: Duration(milliseconds: 4000),
              child: Padding(
                  padding: EdgeInsets.all(20),
                  child: Image(
                    image: AssetImage("assets/header.jpg"),
                  ))),
          const FadeIn(
              curve: Curves.easeIn,
              duration: Duration(milliseconds: 11000),
              child: Padding(
                padding: EdgeInsets.fromLTRB(0, 10, 0, 5),
                child: Text("Hi, my name is Israel!",
                    style: TextStyle(fontSize: 30)),
              )),
          FadeIn(
              curve: Curves.easeOutQuint,
              duration: const Duration(milliseconds: 4000),
              child: Padding(
                  padding: const EdgeInsets.fromLTRB(0, 10, 0, 20),
                  child: RichText(
                    text: TextSpan(
                      children: [
                        const TextSpan(
                          text: "Quality engineer @ ",
                          style: TextStyle(color: Colors.black, fontSize: 20),
                        ),
                        TextSpan(
                          text: 'Red Hat',
                          style:
                              const TextStyle(color: Colors.blue, fontSize: 20),
                          recognizer: TapGestureRecognizer()
                            ..onTap = () {
                              launch('https://www.redhat.com/');
                            },
                        ),
                      ],
                    ),
                  ))),
          Container(
            padding: const EdgeInsets.fromLTRB(0, 10, 0, 25),
            child: myWidget,
          ),
        ],
      ),
    );
  }
}

List<Widget> getButtons() {
  void _launchURL(String url) async =>
      await canLaunch(url) ? await launch(url) : throw 'Could not launch $url';

  return [
    TextButton.icon(
        onPressed: () async => {_launchURL("https://github.com/iblancasa")},
        icon: const FaIcon(FontAwesomeIcons.github),
        label: const Text("GitHub")),
    TextButton.icon(
        onPressed: () async => {_launchURL("https://twitter.com/iblancasa")},
        icon: const FaIcon(FontAwesomeIcons.twitter),
        label: const Text("Twitter")),
    TextButton.icon(
        onPressed: () async =>
            {_launchURL("https://es.stackoverflow.com/users/4887/iblancasa")},
        icon: const FaIcon(FontAwesomeIcons.stackOverflow),
        label: const Text("Stack Overflow")),
    TextButton.icon(
        onPressed: () async =>
            {_launchURL("https://es.linkedin.com/in/iblancasa")},
        icon: const FaIcon(FontAwesomeIcons.linkedin),
        label: const Text("LinkedIn")),
    TextButton.icon(
        onPressed: () async => {_launchURL("https://dev.to/iblancasa")},
        icon: const FaIcon(FontAwesomeIcons.dev),
        label: const Text("Dev.to")),
  ];
}
