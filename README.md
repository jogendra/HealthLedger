<img src="/Static/logo/icon.png" align="left" hspace="1" vspace="1" height="150" width="150">

# Health Ledger
Application for tracking Organs donations in hospitals and minimizing the scope of Organ trafficking using Blockchain (Hyperledger) technology.

---

## Developers and Maintainers
The project is developed and maintained by
- Jogendra Kumar ([jogendra](https://github.com/jogendra))
- Aswanth Koleri ([aswanthkoleri](https://github.com/aswanthkoleri))
- Iti Shree ([nmdis1999](https://github.com/nmdis1999))
<table>
<tr>
<td>
  <img src="https://avatars1.githubusercontent.com/u/20956124?s=150&v=4"/>
     
     Jogendra Kumar

<p align="center">
<a href = "https://github.com/jogendra"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://twitter.com/jogendrafx"><img src = "https://www.shareicon.net/download/2016/07/06/107115_media.svg" width="36" height="36"/></a>
<a href = "https://www.linkedin.com/in/jogendrasingh24/"><img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/></a>
</p>
</td>

<td>
     <img src="https://avatars1.githubusercontent.com/u/21339090?s=150&v=4"/>
     
     Aswanth Koleri 

<p align="center">
<a href = "https://github.com/aswanthkoleri"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://twitter.com/"><img src = "https://www.shareicon.net/download/2016/07/06/107115_media.svg" width="36" height="36"/></a>
<a href = "https://www.linkedin.com"><img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/></a>
</p>
</td>

<td>
     <img src="https://avatars1.githubusercontent.com/u/27366543?s=150&v=4" />
     
     Iti Shree

<p align="center">
<a href = "https://github.com/nmdis1999"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://twitter.com/nmdis_iti"><img src = "https://www.shareicon.net/download/2016/07/06/107115_media.svg" width="36" height="36"/></a>
<a href = "https://www.linkedin.com/in/iti-shree-6b0ba210b/"><img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/></a>
</p>
</td>
</tr>
</table>

## The problems HealthLedger solves
Our aim is to minimize the scope of organ trafficking with the help of Blockchain technology.

- Financially weaker group sell their organs in order to get out of debt.

- Some doctors taking organs from brain dead patient without permission of their family (or without patient having signed required docs for willingly donating their organs before death).

- The records that are maintained of the organs donors and organs receiver is not secure enough and is not  transparent and could  easily be hacked or altered.

- With the help of HyperLedger we can easily dodge this issues.
  
# Instructions to run

- Clone the repo `git clone https://github.com/jogendra/HealthLedger.git`
## Running the API Backend
- Goto the API directory
- First install the [Hyperledger composer](https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html). Then install the [development environment](https://hyperledger.github.io/composer/latest/installing/development-tools.html).
- `composer archive create -t dir -n .`
- `composer network install --card PeerAdmin@hlfv1 --archiveFile api@0.0.1.bna`
- `composer network start --networkName api --networkVersion 0.0.1 --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --file networkadmin.card`
- `composer card import --file networkadmin.card` 
- `composer-rest-server -c admin@api -n always -u true -d y -w true`
- Goto `http://localhost:3000/explorer` to explored the REST API

# Running the Front end
Check out: [https://jogendra.github.io/HealthLedger/](https://jogendra.github.io/HealthLedger/)
- Make sure you are running the API Backend 
- Open the `index.html` file
- The front end is up and running 

## Communication
Please join our Gitter Chanel to discuss questions regarding the project: [https://gitter.im/jogendra/HealthLedger](https://gitter.im/jogendra/HealthLedger)

## Demo
Click on the image belowe to watch the demo of the Application.
[![HealthLedger Application Demo](/Static/screenshots/1.png)](https://www.youtube.com/watch?v=yFfFxOFAh2w)


## License

This project is available under the MIT license. See the [LICENSE](LICENSE) file for more info.
