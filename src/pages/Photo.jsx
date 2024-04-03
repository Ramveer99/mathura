import React from 'react';
import "./Photo.css"

function Photo() {
    return (
        <>
            <div className='continer2'>
                <div className='left2'>
                    <p className='heading'> Mathura Images </p>
                    <img src="https://www.mathuravrindavanpackage.com/temple/prem-mandir.webp" alt="" className='leftImages1' />
                    <h1>
                        All Photos of Mathura
                    </h1>
                    <p>
                        Click on an image to view in full screen
                    </p>
                    {/* Images  of mathura which is use for show data */}


                    <div className='mathuraimages'>
                        <img src="https://holidify.com/images/bgImages/MATHURA.jpg" alt="" className='img6' />
                        <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/03/Gita-Mandir.jpg" alt="" className='img6' />
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFxgXFRcVFRgXFhcVFxcYFhYVFRcYHSggGBolGxcXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lHSYwKzUtLS0tLSstLy0vLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALEBHAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABGEAACAQIEAwUFBQYDBgYDAAABAhEAAwQSITEFQVEGEyJhcTKBkaGxFEJSwfAHIzNi0eFygpJDU5Oi0vEVFqOy0+Jzg7P/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALREAAgIBAwMDAgUFAAAAAAAAAAECEQMSITEEQVETIjJhcQUjM7HBFEKBoeH/2gAMAwEAAhEDEQA/ANiKUUUU1fWHjA0qKlTsQMU0UVKiwBimijilTsKAimijilFFiAimIo4pRRYEZFKKOKUU7ADLTRUhFOymB7Ou2hneJJmOvLlUudV9RpWQlaWWpAKYrVWIjilFHFKKdgBFKKPLSiiwAIpoqSKWWiwIstKKkiminYEcUstSZaaKdhRHFKKkimiiwI4pRRxTRTsQEU0VJFLLTsZHSijy0wFFgaNKKOKaK5rKBpU8UooAGKUUUUoosAYpoo4pRRYgIpUcU0U7ACkRRxTRRYA0iKKKWWiwAIq5gsNmVmOyq3xjQa+o+dQW7RYgDcmB6mtK5gbITLcIc6zCs0ToQI+tcfWZXHHUX7uxtginLfgx6eKmuC3/ALO4G8gII91R5a6ceRTjaMpRp0BFKKMimitLEBFKKOKUUWAMU0UcUoosCOKUVJFNFFgRxSijilFOwI4pRUmWminYEcU0VJFMRRYEcUooyKaKdgBFNFSRTRTsDQimo6VcxQEUooopRTsQEU8UUUopWAEU8UUU4E6UWAFJVJ0AknkN6014Z48pMAAE6gnXfpAkGtbDYe2gGVR6nU/HlXLPrIRW27No4W+Tnr2BdVBynz8vhtVWK626ic0X/TJ+G9Z+M4UreJPD5cj5jpUYes7THPB3iYWWnipruHZIzqVkT1+YqOu1TUlaMWqZNw6zmuKOmp92tdPbOUACAo5CNgOZqhwrBsqyywTO+8GPLQaVddDEQSTM5THP8RI+VeR1WXXPbsdmKGlbmFjuHWtbiqA4BgjmuYhpA06GfOs2K2rdhyhUKVyhlHe6aGDpBOaIqHBcLLKS5ykaCIPv322Na9L1KhcZdiMuLVTRn2cMznwqT6fn0qbHYNkMwMukFTI2jX3zW7gyEAAhY0AzIc52zAz9Yq42v3euhAIB6aTRLrW5prhAsK00cYyxoaaK6HGYEXOUOTqQNhtDQTHrWVcwTqpYqQAYjX1mem3xrsxdTCa+pjLE4lOKQFHFIV0WZkZFKK1OH8Ja54j4V+Z6/wDepcXwdvaWT5HL15GawfU41PS2aLFJqzGimiprlsqYYEHzoIrdOzOiOKUVJFMRTsCOKaKMilFOwAimIo4pRTsKAihqSlFOwLkUiKOlXPZVARSo6aixAU4FPlp4osKBIq1w+0pbMzBQpBMgkn0gGq4FW+ErN0CJBmQfSfyqMreh0VBe5Go2JszJce+AfLdPPrTd9b2W6voCPpl6x8aujBr+Ef6j+v8AtULWlQyFE67sfLavGpHbuRd+un7xPl1jqOelNaZYAV0gbDw//J5fKplxQ6L/AKx+YpxiEn2VnT76+7f30qHZS4hh+8jxLp0y8/8AP9KrWuFaglhA1I8h5gmtdWt7d2PcbfQgc+hI99UOKuVgWVUHeCqktEKAI5xp7q1jnyRWlPYh44vdl044T9z/AFMPqtOcev8AJ/xB/SsPH8Ve2FlhA9osCoUAfiG/9qzcD2y70xbUswGwzaADnLR8ayKs6z7cD90H/wDYn0NUONY5gugUAjxZmVhEjxSG0AE6+lY9/tcEfLcTK2kAhtehGsEVoDEhwxe3agD72Ygg9KmUdSpDUqZWTibA5ZUwXGXJyUaagb7yZ6UeJ4vcGmk5SSPEDsCJGsfGsq/x/BW2CXLVtWicvSeYjY0eH45gmRn7sMgBBYzCiNRIXTQ1i8ckqUitS8E32ooXJVX1PtyzaaT4UkaaATV+3xkhchtwJyjxGTJIJykE7axrWNhuO8ObwgBydABc1k+761oYVrOV27pgEkybkRpMgDfaiOOSqpA5J9jdWzYiSBzOqEbmY2/W1FatYbcFAff61g/+Z8OBBLKw6uZ22Iz1N/5lw8aXGU85J+mfSuvXLyZ0vB0C3rYEZ0gedL7Sn41/1Csm1xq27AKbxkTAG49SYqxg8ebzMtsscuhLK2hkSCQwBMTUMos3O7cZSVI9RHL51m4zhiBGKtqNVGh0jb371pmxdjUrt0fUx1z9Y+dUcd3qGBZW4DPilgRvoRBGwrTHknFqiZRTRgilFSXCCZC5fKZ+Zoa9xO1ZxUBFNR0op2ICKaKOKaKdgBSiiimy0AXYpRRRSrAoGKajimoAaKWWiilQAMVf4VhmkPIA1G+vTSSOvWqaLJiQPM1oJbDqqq+oB9gk7eh/U1zdTl0xpdzTHG3ZqAEGCSfL9PVDEXb+c5Cun4gs6j16etRjhr/7y78W/wCqp+HotjOblx2JiS+ZsoEneDA1nevOOkrHE4qd008o+jUxxOK00tn/AIg+QrUt8Vw5++n/ADf0oMTi0Vc8qF2k6a/5o8h76QGZiMdilIz2rRkSIL/DbeqOIxN+62bIlvLpABgjWTJiIrcwuIS54T3cnaHVpI1iAB+pocGbZJDKuYFoyxsOq8jUtDMntVgrGIjOfDaBcopyZz91T1GjH1ArGxl6wls2LCgBkygsIIOskRqTtudxWv25TLlZCP5oA2865O5EGVJn01+elDEa+HuWHt93iBly24DAFiWHNdJU6E+ZPx3cHhFt4VgGJzCbQYjMuZQQo6mT864K5iWEA5iCY2195mu07OKbmBfMRIZgk7gKqkfOhN2FHOPgsPglustzvMTmC/vASW1DMVjYEGf8tAeLo1ywyBltqG71VIAJcawvOGnpWL3bE5mzFjuSDz8ooWtEaiR1kGD5xS1Do28OmGvi4H7vDrZymyZ/eZeZyzrtt1Ye/pRwq6uEKM4e9JVHyjKZjKxGswCJ32NedK5JghtPa0jbl9K9C4bfuXuGd+T4xnKtzItsQpj3e+nFuwaOdw3A8Lhov37ne3C7a7sGUEH93r94ESeeWq/DsFYx6Kl8xiAXGaFt+GWZNRowiNOpNZFx2ktOaTJk7k6kzVfCnPcygEa+Ix+HlMdffpQ34Cj0js3wa73bi7cV1VR3b2wfFEhgc2ogj39afCcWwSqAt22OoKHc76xrrQ9jQ921dt5iRby5SpgS2eR7t9qrWjbdsrMGZdDtm0OpMHrPvmtIpshtGseKYU7XkPuYfnVq3xPDrteVp00Yr9Wqnh+C2nAZSseeYfnRX8Pbww73Lmjw+Ccwnn4jt/WigKl5QGIBkSY+NBloxdVhmCuJ1hwo0PoTSr2oSuKOVrcCKaKOmirsQEUiKM00UWOgAKYipIpUWBZinpRSisRipqeKeKLAGKUUUUoosAYrc4ZbYrmAGYzOaRzGsA/OsU10HCwqqrHcqRMdW6+4Vy9V8Ua4uTPvcaZHuJ3DHu/vCcrGAcqknU6/I0uJYjveHYh2tlM9u4MrbxBXXX86gxWEuF3IAhnYznAOUtpOh5cvKtPCYc9wLbKCIIZfCy6kmCWAzaRyryoym5NV/k6tKSuziMFwPDBrZFoHNJDbkeKBAJMEERtNL9t6D7HYHW/9Lb12/wD4drItjTY5benzqtxfhj31AuWbd5QZC3URgDESBJ1gnXzrSKenS2TsnaR4n+zmyP8AxHDamMzczytvXvvDbIW0pAnQHz1rAwfAktMLlvB2EcbMltVInQwVXzrd4c7BctwQAI0WBHrOlCTSY5SUmjD7XsWw+IDJsrhTG8ICI8t6+a7eHbIXAOVSAzAHKC3shjsCYMTvBr6p4lZUr+7KZteY5qRrO+9VVwLd0VPcliynZMsDeRlg/ChoEzy3sPYnB2SZ1e5r6O3xr1Lg1gLh1Xu8we42aRsNdSeQgCpreHgIv7nwhs0BIBLSMoiBp0q4WiYbnvIIUQBp56fOl2F3OO4x2IwKJZQre8Clc1u6yO2xm4R7R1OvnUfA+x+CF0MBiTAaFu32a3Mc15kTpXXPfef4j++yaY4h/wDeH/gn+lGlBZzDdn8KwB/fbcnT1/DW+mBspYFgL4GXTxQ4zySZ2HX1q01xv97/AOl/aozdfndHvt//AFpiOZ4X2Ds2w7texF2EOVbt1SFI5/uwJOnMka1g4TAoHbQamdupkn416ELzbd4mv8h+fhqG3wxAjRbRpK+yG111310nlTVIT3KvZq2lq3dOsCNAToAN/n8q81xfE768Xu4ZbpNpXlQw5OqvlPl4o91ex4TBjLoMgKwRlgnXqdevxrgO0fZ21b4gcUe9zuqnTLkMAL0mfCOdUnctuAe0dwuLcRxNm8tqxcy51zGc5AYsR906CtrhjX2wz3L13xhtMp8JXw75p55vlWVi7S3mDSVgRHh11JnU6HWtPhQ7lXQEuLhG7L4dPWrcZPKmuCFWnfkEGdd/SlFG41oTXrxexzgxSiipRTsKAilFFTUWANKKemosC1SoqVZWOhqaip0WSB1osKApVvI9s/c2/lX8jREWxqLfyUfU1yf1kfBr6LMTDWC5yiJ863LKFdGMAKoGsCRM6g09nnlQqR/gmPn5VHexaqYe4f1v90zWGXN6lVwXGGktIU/F/wA7f1pPdjQFfeSfnrVI8Qsj/afHT4+Cokx1ze2FZdpm5G+sASKyouy6bzdbfx/tTfaWHO3/AKv7VRbHYifZX/1Y+EULcRxJ/wBmvu7z/pp0KzQGKMfc/wBQoWxGmuWD0IO3UEif7VntxTE7d0NOnef9NQt3t0zdtgD2diSI2aWA69KQWahK75kPoik/+6kjqTuo9bY+sxXLdqDcRlRUzMc2UKAY2ljB3H51kWOGXbaNduXLj5VzBM5GpBgNJg0nYWehMUB1y+otz8wazsXxHdbSo2XUySuscsp1j8647HcNvQty3ccAqHyFiTHPLG/LTqa0OGYY3f3kFDbaH00QqM0zvtBpfcLNrE8WuLb2SdPD480k/izTWFc7aqpKi1caJk23crpz/iDSt3tZw9rtpbdpyhuEeIEnwwWOg3kD51zRtW8JZVkuLcZ7keP+IwBPhgHTaPfTf0A0+H9sy6d4lhypmM0+LKJOQZjNQWe2ysdLd0a8y0T5S1ZOM4sneWWQOEtqe8UHKDKwAFn7pB35Vf4ZirWKe5bXKlsA5c0qxbNOYaxPimPKlf1A38Nxa4SugykTLXG6bHSpvthu3SCqHKJJzsV6wBlM8tPWqfZfg2TPFxntsJX7viEBjz0OmxjQ1yHGluvevLau3ENpwNYggidzpoNZjlTTsD0LuwB7KQehu/8ATVXG4Rgy5V35KS0yf5gIrg+A37r3vs1w3e8BJUySHCxO2lbWIv8Ad3SpRpWPCrQAT1DMJ0q4Np2iWbFlj0b4f2qS7i/CwyuJB1g6aelZgxqx4bRnzNuPcM350hjJGtoz5FB8s/510arM6J7FyRvrz/LepKrriVgATzmdvjJ+tWLCFxKwY0MGda6o5FRLTGpooiCNxQmtLJEaGiiminYDGmp6VFgDw/idm+JtOGjcfeHqDrVyvIbONe24a25DKeURHmOfvr1DgWN7/DC/sADmkrMqPEdDtXNHMv7ikrL1S2LsbBSeWYT+elMlkkZhEGIOZTv6GoWxCI6qze0QBAmTppI9RRPJBqrKUWLjXaF8PnPdoxAkKZUnUA7Exyqzw7i928ue2qEHlBEeR8QrH7XYPvHDZW/iLbeNTkYzAg76SPWtzs+yYTCCWlEZszGRBz5IO8mdPWvMfJuie1ZuXSc4yxHssQDPo1WsPgMs5iTtEkt8JYxUN/jaGy19ZZEIU5YkklRoCP5hzqfh2I79SYZYMQ4E7Azp61puImOEWYn6/wBaIIiaRPPWflXL4XjeJuIHTDowIn+JH151odo8S6Yay9tsly7ctLI8QGcEnQ6GlJuKtjSvg2C9udhFRYrEW0Us2VRp4jEfP1isLCtczorYq4SHWQVtAOpyyIiVEHrOvlXN/tf4riMM2GXD3Gt5g7HKSCSCBuNeZ+NTe1jXg7uy9tyXWGIGojWOW8H9GjweIttqAOhAIJB2IieteSfs47RY29i2S7iblxe5ukBzmEiCDXsWAwmVVBJMRuTHwmhO1Y5R0ujn+PcQRGckMrFAFEZdSQZnmNprk+KYp7xl310AgAAQSRA9Sa6L9owjD4i6rw1u1II0IOYwf10r5/PanGnfE3Pj/alISjZ6zguM3bJIUjxSsxPWIEaHU7V2VriFs4UvBcZRnG50ABDGd9f0K8+7JO97B2Llxi7sbkkmSYZgPpXb8DsZcJiASFl3/wD5KOv6iihcFntRxK5h7IvBQ8AQsRBOi7jYTrrXll3EM57wnxEyQSIkkkx+GSeVeg/tWxOThtxrbMrDu8rAtPtL16jTXrXhfD+O4lrttTecgsARI2miTSQ1Fvc7NMcxJEAknoSNRMg9a1MCgcB1dTty8QImQy9ajbDyW0n/ALDzrQ4BY8DaxqOZ6DzpxjZLZ1fYniZuWzY8Oa0oBYbFSTyjfQ1xfajiDDFFUQLdDQ5GaGMggkbQBHLrVn9i+NdsRj0uuzZMoUaxGe4Dt6Ci7UWQcaxAkEzr1gdT1miK1Icti7wXi3j8RGcEFVB6AggCd9fnV7EYy33pYOFLsDlMhpAA6+VZ3DcOouI2ixOvuNcn+0fit+1jkt27pCOltiAARJZ1O866Ctn7dzOPu2PWuHYu28hzlPLxnX4/rWlj+6AhWgkH740Owrk7uJurh7VxbmS4zIubLOac2gEjU9Z5dKLg3E7z4kW7tzOpVjsVMgSJG4q+JIV2jO4jxG3h7yWshm4pKlMo9mSZOh5culdT2Tv3HUZUhd2zzufujz+NZ/Fey1vFpcZi/eW1/dFWIIIYNsWyn2Rv+Qrc7I4ibAEEQdCY10G0H9TSm6bQ0jVe0G3HuNUL/Dx93Q9K0nYbjehzg0o5JR4G0mYF20V3FRVu3ADoazsThQNRXXDOnyZuHgpU1EaGtrIo8hAZj4RMef8AWtHhhcK2p6kZtAOZiosBg71xCUtORyhdDAPymam7nKEy2318TMEnwjTTyzaE+VeZu9jSMW90Xxxa6hUs8hRopPKZMDlNdXb4kMRiMEloDKWS4wB/AZIP+EKfWuOwvC3uMXYXBbJ0IUNm11EExp+VdP2L4a327XvCEVmzODMFMgzE6A6wBr/TB4tTUn2NoTkouPk6/jNsOIhSTftzDfdlNdfWpu0mGL4QooMvctnTU/xg86eQqhxHAZCzKCTbKQPFBVAjADKD+GNBW8/htiUYlUGi67ACPX+lWmtQVsVMXg1GFKKrPLLIXUkgjqdNhz0q3wlctnUEN4iQYBJ9BUuHw8oM4AMnTwnSTB1G8RpUosgDT6L/AEpdx9jm1sXreVbIJUIs5kA8QGUhQxGkCf8AMfSrfabCvds2UQqGS4jt4wuUKjTGojUgaVuCyvT5L/SgdOk/GKnRdpvYpy22OUw/Cn+0pdLIEVw5GdZJCqsnXyO3kKxf2q8ExOMu4dsMgdbaMGIuIsEsDHiYTtynavQ+682+NVMRwy25kjXmTlM+pIq9KpR8EW7s80/Z72TxWGvNdv21Qdy6j95bPibL+FjG1er2cSrAEMG22IO5A+pqgvBrUaj/AJV/pV3B4YKIBI8tI90VKWlUW5OTtnMdq8t3D31uIyoyuhbVZjxKNuk/PrXzlgeGtdv9ypGhbM/3ERZL3GI+4qgn3V9P8V7Npdw+JstcJ+0FnLXIISUVIB5ABd9xNfOXCeD3xiVtS6pc9t1BAawGDM0nkQgMHymjJJKI4Lc9D7OIuHVbS3SbIVbiZ0KuouFiCRyzZs3P2YG2u12a7SDvb1llLI+R1UgeGSEYyFmGzIdSYCnaq2Ds2jcW9cuItty5LXGAjMFRVmYIIa3/AKjVTsXet4fF3bN11i4zqksZt3LVx1t2xrABtwQeoiZ0rm6XM5wbls7/AIRrnxxUvbvtydn+0G87YTF2ymZThnIMfeAJEa9YP+WvmzBD94n+JfqK987RYxbWKxNrOzi7bUEMxy2ctolntjUDwsGYeHYHXevDuF8OuNctju3gssnK0RI5xtW7d7GdNK2en3bsd4RJA3iZkaH6VT4zi2tYK46BTkupnzT7MwsQQZzBT8a6XD9mL2IAdLyWgXgCCxcJOdW/DJDCeUVjdseGsvD8RbCln71YCy2gdBIjU7NW0eLMapo1P2Q+G7xLLaysXV951Kswtg6CAWMetT9tsRluJddYy2ZMTrqdNN/71iYLtB9hHELthe+EWirlWa0rqLVvIzJ/KzGJGqATVu4mMxuDw+Iu2Qbl3PkGHiHQm21owD4W9sanTLrGtRF02XJWi5w/Ep3iKYJJiDy8JP5VS7a4Gzi0ti1aU4sOmU+y2QMTBOkgiYHUyKHg/ZnHYS6DilZw7MRcttnVJAhHG6/e5RymnwVpLV83XR4VQYA10Ygf+4/KjNH1EnbVO/v9wxPQ2qu0WbfDmYBB7YW3Ks2kWi0wNgYLT6jyouBcGu2L1u7dKwczTO6srAHz3FXOw3EFxV8sqMsZldSTKa+EZtNwZ66V2K4QhUymJzAh9VJ8+hOu1c/QTyLEvU5t8/d1+5v1scfqfl8Uv2RyXHeJ3LaM2HuRLEGApkakTIMDQ1m3OKX7dq33FzLIEhQCJgEE5gTtXQcX4VmACghy5BDuxUzoMpiNDprG861l8Xwb8OwD3GSzevBVVEcmCwKqzACM0KZjyrvnkjTkzkx45SkoxVsy8d2lv20V3xJUt4QGyAFtjAC6jb4iiscZxrBibx01MBBOh6r5ViY3tjbxWDtj7LatmSl4pqs5W8OVh4c8SNSRBE9eq7Jcd+1q+XA4Y93AdgxXMTMBVYRPXxcx1pxT0a9qKkqenuZB7QY3Izd6ZBA2WNZj7vkaQ47iyVHePDCTonXl4dtKh7e4m4RabDHDYUIXNxS6DvHDZVUqZzRlYxtDgncVv2u0to21dMNhMvs3GQl0QCLhSRBPTyb8WkkcibpIbxtKzAtcXxLl3zSQuhATbMBB06kVYwuNxbA5mIIMbW9dAZ9nzqpwDtLaOJuM7YNLd5hkw5trKHUZCwUEEnKTM689Ndbj/bJbNxU+z4cHu0YgpJGdc4BIVhMEbGj16jdbFQ6aeSWmPJ0Vu+AIEKN4VFA9N+cfOmGUkCN4+7b67artzqLKOh+BqzatkQcp3B2NOmYWa4tHl3cToumi5tNI32qylnKNNJ3ywPyrItZ8wMHfp/NNaeCO6nl86ylBlRYThhoCToSdRPl9D8aje6eSA6AnwEmTuNKlNwTHu+tTOkGdqlQKsJW1gGI5a7aefnUK4wlykqIzdTsY/FVlV1mmtKRpyk/MzRpCxrWInYg69COTHr5UrjvE5h8P7UQTWef9j/WicEiI+dFBZFmYzDDcjYcjHTypXHKqzFh4VnYDr19KICNgNz8yTUOMsZ1YHSRB9PcRSaHYy3piLiGdo1n011qypYKDBJIB0jp0JH1qK3aRfZUD3H+tEqkAAnkPoKlpjsr8aGbC3VMjMkGIkZvD1/OvJOzGNUX7tognwW1hlYGSwB3H4V+des8VtNcsXLQMM6FVbcAkEAkTqJ5V5theHfZLl27pcYZEcZjAyux0LbHQkzpqayyr2WVzFr+aOa7Y8TvlMpAti1ilKIIgItlSq9ImdNq5zjwcBXue1fXvgQdxdl5PT2thXScN40i4nFm9bS/au2rroLgVrfeqoKXBm2GUEaa7Ve7J3F4i9xsQiXAlnuiSihRJRkKr1ERpzHnRDdXXH+wi2lRnW8HieI2L2JRHClApyE5c9t7alEzsSR3RBOupXUkivZ+H4QW7VuzAItqiDbZQFmBttXl32PGWrWHs2Dcsz9o1RlyLN5rgNxcwUkICuoPOK9FwmMvgBu5UmJMMImNcpEmPdWjVcEym29yzjS59k5crAwNNco59NTp51Bw+23dqcupEnXSTqY8qmwpF25cKsGghdNR7ABjpqD8KoYF8R3SQlvbcsxkDSSFG5FRCWuPt4CScH7ivhOCZsBicC6hE0thlJLuzAO955AhyxmNR58qm7F4C7hbCYcksqEojkAA6GWAk6STv0FaeEvLbRu8Kr4y7SxjVREFoMf0rE4hxJhi7Is3gVZHYIGm2WVSc2gMsNOcaDrV4lcqXJrkk/T1NHV8WJGWJjMJj4D/mIrkP2jWZwbtJkFJ0GozgayD+viCwnaHE3WVTctt3hISEgFUmQ7SYMiZEVJ2ls33wl5W7qCh9ksTpBBExzFadRilj2fgwxZUpWjjexZ7tswP8RipiNxmbkPI/CvRcJxPUFtxsw39/I++uP7G8MBVWJym05uiTALOjWzI1kQWPvFdN9hJMhlA6b1lhVxKyTt7I37VxSszmzOCIBIBLA681O9cL+0S/3li2+vtXVmPuqeo0kkCBuda6vBYN1YFXj3ae8TrS4lgUuoiEDKrsSo0BbU6+Uk/GseuTjgk6brsjp6DL6fURn4PJlu2baOLdi3dXGWcuTNlNu+jhi8kGAMxIAG/SK3+wPDbls5H+8WaRJXw91CsQAJmTHrWlheyeHZn7sEgL4GDMVW4CCANYP9K2OEBrNhX7tnYMDkXQks4122GaT5A0vwqaydJe9N9+djT8RlF9R7PBhduzlxaW7AcOli2rG1hsLfeAz5AxvOGSB7jPlQ8Bsi7bNx711riXCGFw2s6EAQmW1KqASGy6md+lS9q+GIbt29euXssKTkuZAAqjxmBoZzabRFZnZvDNZe66G61hrerXLgdluAykbHKQTyOp3rrn+SvUl8TDEll9kXT7fX6HmPaLBKMXi+9uG24v3Sqm2xzS7EEEbTXuDcDS8EuXZD5EDAEDUKJ09Zryrtlwu59tlpe73C4hkaDIW4wZDG5yCfcd69Y4VjUv2Uu2tVdZ1JBB2KkTuCCKrAlNXw/D5Iz3GWz87lmzaJP9608o0/vSRQNtKKutnKlQwHlU2GX2vSo6lsmAamXBSGA8Q9CasYloIHWaolvF7gKtYpSY8prPuMluvEUYOlVMT939dKsMwyfD60qAPvqa49V1TWfOixTQwAFKh2S95Ud28BprUeFYloIqDiDwx0+f5U63FZbF3SpkMis/BXZnUcvrWmm1KSoaIcQYQkbjWufKq+dcokxOm8nX51vkkK0+dZNq1qSPKlWwpMwMLwHCo7EWbSnI4DBFB8W4kDnJq1wmylsmAqggyAAB8vSrt9NTy1pjhJFaKGxNsZcOXE6AAtPoxBP1IqRuJaGBrGmuk8qkfClBlB3Hp+tqoWrPiB3E0pw1RaQ4vTJMz8PfWyQXuFSGAknLMbkdQdvfV/DY633Uhm0G6yZ9JBrX+yBtCOnKq9yxlDLXn/hnSY8EJKN7vudvX555JpyrjsUVCXEZHHgdYUssQ0aE8+Z+FZxwTLaw93wgi83UTbIKiI5EKpratWc8LG2+p+oNS3sOotIm4XTUk6DTrXWsGnNrj4Mnnbwem+LON4dilV0RQIF0gfy6Etr8a6W9ckFdDp7OYa0KcKtBpCwQQfDAG0aj31onAr7YGorq6hqfKr/rs5YJrgwOz6XSzq9tFAchQHB8IkLMbGOVdPbwrb+EehJ+Zqmt4JqVP+UE/IVMOIKQSAd+kfHpXNDGo7GspXTL3dnrUIwh1Ib72bnQX8blE67TrH9ahscYQz06yKuVRVsmKcnSMvsnwvEYdLyOyQb9y4gVTChzmKR0Bn41pYFLighrgJk7CPqaIcTt8jv5j8qAcQGvhn3ilhlGUbReSMoyaZDxa0zoye0LgytP4ee3kTVLhvDWRWBYDMFBAEjwiBvp8qt4vGbAIQTMEAkDTnlECsg8acXlUW2KgNm38obNsBPXea1lKNafJMMcr1LsR3+DWzjVxDli/d93rEe0TI0mdxvzrR4bgbdtStqFTMSAF0k71DxHGucpC2+c6ljr6VZwfEAEAyDzjMNfSKWOGl33Hkle3Y20pHenpVoZj1Ja2NPSqZAiqfa/XWtA0qVRIYJqS77J91KlS8DK67j1/OpMV7Q9PzpUqJch2GwvtVVx3t09Kl3F2JMFsfd9avruf1yFKlRPkaKuK2NUrG/upUqa+ImRXfaq1b50qVWuBILGc/QfSsjDbn1pUqI8BI3bPP3VVue0aVKox9y5kWA9pvfUeI299KlVL5jf6Yy86svsaVKryGcSrh9jVTivtp60qVJh2Df22qli/veo/KnpVGX4M0xfJFXDbp/jH0FW7v8AFb/CPrSpVz9J8Gb9Z8wcN/E+H50I/ir/APkf6GlSrpl2MsfczeN/xj6j6ClY5+v5ClSpYv1GVl+KP//Z" alt="" className='img6' />
                    </div>
                    {/* Images  of mathura which is use for show data */}


                    <div className='mathuraimages'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Yvm-tx7_wx69ai_OhkHg_U4YwZYLeKOXrg&s" alt="" className='img6' />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ouyDrm9zikDNf06NJycLflYK_QExBUu6jQ&s" alt="" className='img6' />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9J1BZV3GdPbVVOXOYQric4x5VCVnVkedtw&s" alt="" className='img6' />
                    </div>
                    {/* Images  of mathura which is use for show data */}


                    <div className='mathuraimages'>
                        <img src="https://im.hunt.in/cg/mathura/City-Guide/sri-krishna-janmbhoomi.jpg" alt="" className='img6' />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnX7rAz4ua9ooK_0P2bF0pLJDx-3Z8XP6MZw&s" alt="" className='img6' />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGl5uN8XJ_OFEsDkhvJw7IDzzGd6yQvWry5w&s" alt="" className='img6' />
                    </div>
                    <button className='btn' style={{
                        width: "780px",
                        padding: "15px",
                        marginBottom: "30px",
                        fontSize: "20px",
                        color: "#3d81bb",
                        backgroundColor: "white",
                        border: "2px solid #3d81bb"

                    }}>View All  Photo </button>
                    <div>


                        {/* this is another one  */}

                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            borderRadius: "4px",
                            marginBottom: "100px",
                            marginTop: "50px"
                        }}>
                            <div
                                style={{
                                    width: "30%",
                                    height: "200px"
                                }}
                            >
                                <img src="https://www.holidify.com/images/cmsuploads/square/44740200661_87a6f2d457_b_20190409174705_20190409174732.jpg" alt=""
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "4px"
                                    }}
                                />
                                <p className='para'> Shree krishna temple </p>
                            </div>
                            <div style={{
                                width: "30%",
                                height: "200px"
                            }}>
                                <img src="https://www.holidify.com/images/cmsuploads/square/44740200661_87a6f2d457_b_20190409174705_20190409174732.jpg" alt=""
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "4px"
                                    }}
                                />
                                <p className='para'> Shree krishna temple </p>
                            </div>
                            <div
                                style={{
                                    width: "30%",
                                    height: "200px"
                                }}
                            >
                                <img src="https://www.holidify.com/images/cmsuploads/square/BirlaMandir.MathuraUttarPradeshIndia._20190705180915_20190705180939.jpg" alt=""
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "4px"
                                    }}
                                />
                                <p className='para'> Shree krishna temple </p>
                            </div>

                        </div>
                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            borderRadius: "4px",
                            marginBottom: "100px",
                            marginTop: "50px"
                        }}>
                            <div
                                style={{
                                    width: "30%",
                                    height: "200px"
                                }}
                            >
                                <img src="https://www.holidify.com/images/cmsuploads/square/44740200661_87a6f2d457_b_20190409174705_20190409174732.jpg" alt=""
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "4px"
                                    }}
                                />
                                <p className='para'> Icons temples</p>
                            </div>
                            <div style={{
                                width: "30%",
                                height: "200px"
                            }}>
                                <img src="https://www.holidify.com/images/cmsuploads/square/44740200661_87a6f2d457_b_20190409174705_20190409174732.jpg" alt=""
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "4px"
                                    }}
                                />
                                <p className='para'>Prem mandir  </p>
                            </div>
                            <div
                                style={{
                                    width: "30%",
                                    height: "200px"
                                }}
                            >
                                <img src="https://www.holidify.com/images/cmsuploads/square/BirlaMandir.MathuraUttarPradeshIndia._20190705180915_20190705180939.jpg" alt=""
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "4px"
                                    }}
                                />
                                <p className='para'> Giriraj ji temple  </p>
                            </div>

                        </div>



                        <button className='btn' style={{
                            width: "780px",
                            padding: "15px",
                            marginBottom: "30px",
                            fontSize: "20px",
                            color: "#3d81bb",
                            backgroundColor: "white",
                            border: "2px solid #3d81bb",
                            cursor: "pointer",
                            marginBottom:"50px"



                        }}>View All Places in Mathura   </button>
                    </div>
                    <p>Top Hotel Collections</p>
                    <div style={{
                        display: "flex",
                        gap: "20px"
                    }}>
                        <div style={{

                        }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ikBC9P7YE1kOGVnYQPDexzpQ2uf_flBEoTafTIuQ5A&s" alt="" style={{
                                borderRadius: "99%",
                                objectFit: "cover",
                                width: "70px",
                                height: "70px"
                            }} />
                            <p style={{

                            }}> 5 start hotel</p>
                        </div>
                        <div style={{

                        }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ikBC9P7YE1kOGVnYQPDexzpQ2uf_flBEoTafTIuQ5A&s" alt="" style={{
                                borderRadius: "99%",
                                objectFit: "cover",
                                width: "70px",
                                height: "70px"
                            }} />
                            <p>cheapest Hotel</p>
                        </div>
                        <div style={{

                        }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ikBC9P7YE1kOGVnYQPDexzpQ2uf_flBEoTafTIuQ5A&s" alt="" style={{
                                borderRadius: "99%",
                                objectFit: "cover",
                                width: "70px",
                                height: "70px"
                            }} />
                            <p> 5 start hotel</p>
                        </div>
                        <div style={{

                        }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ikBC9P7YE1kOGVnYQPDexzpQ2uf_flBEoTafTIuQ5A&s" alt="" style={{
                                borderRadius: "99%",
                                objectFit: "cover",
                                width: "70px",
                                height: "70px"
                            }} />
                            <p> 5 start hotel</p>
                        </div>
                        <div style={{

                        }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ikBC9P7YE1kOGVnYQPDexzpQ2uf_flBEoTafTIuQ5A&s" alt="" style={{
                                borderRadius: "99%",
                                objectFit: "cover",
                                width: "70px",
                                height: "70px"
                            }} />
                            <p> 5 start hotel</p>
                        </div>
                        <div style={{

                        }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ikBC9P7YE1kOGVnYQPDexzpQ2uf_flBEoTafTIuQ5A&s" alt="" style={{
                                borderRadius: "99%",
                                objectFit: "cover",
                                width: "70px",
                                height: "70px"
                            }} />
                            <p> 5 start hotel</p>
                        </div>
                        <div style={{

                        }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ikBC9P7YE1kOGVnYQPDexzpQ2uf_flBEoTafTIuQ5A&s" alt="" style={{
                                borderRadius: "99%",
                                objectFit: "cover",
                                width: "70px",
                                height: "70px"
                            }} />
                            <p> 5 start hotel</p>
                        </div>
                    </div>
                </div>
                <div className='right2'>
                    <p> Similar places </p>
                    <div style={{
                        display:'flex',
                        justifyContent:"space-between",
                        width:"100%",
                        marginBottom:"50px"
                    }}>
                        <div style={{
                            width:"49%",
                            height:"170px",
                        
                        }}
                        
                        >
                        <img src="https://www.holidify.com/images/tooltipImages/MCLEODGANJ.jpg" alt=""
                         
                         style={{
                            width:"100%",
                            height:"100%",
                            borderRadius:"5px"
                         }}
                        />
                         <p> Ramveer sing</p>
                         <p style={{
                            color:"#3d81bb"
                         }}> Images</p>
                        </div>
                        <div style={{
                            width:"49%",
                            height:"170px"
                        }}>


                         <img src="https://www.holidify.com/images/tooltipImages/NAINITAL.jpg" alt=""
                         
                         style={{
                            width:"100%",
                            height:"100%",
                            borderRadius:"5px"
                         }}
                          />
                          <p> Ramveer singh</p>
                          <p style={{
                            color:"#3d81bb"
                          }}>  Images</p>
                        </div>
                    </div>
                    <div style={{
                        display:'flex',
                        justifyContent:"space-between",
                        width:"100%",
                        marginBottom:"50px"
                    }}>
                        <div style={{
                            width:"49%",
                            height:"170px",
                        
                        }}
                        
                        >
                        <img src="https://www.holidify.com/images/tooltipImages/MCLEODGANJ.jpg" alt=""
                         
                         style={{
                            width:"100%",
                            height:"100%",
                            borderRadius:"5px"
                         }}
                        />
                         <p> Ramveer sing</p>
                         <p style={{
                            color:"#3d81bb"
                         }}> Images</p>
                        </div>
                        <div style={{
                            width:"49%",
                            height:"170px"
                        }}>


                         <img src="https://www.holidify.com/images/tooltipImages/NAINITAL.jpg" alt=""
                         
                         style={{
                            width:"100%",
                            height:"100%",
                            borderRadius:"5px"
                         }}
                          />
                          <p> Ramveer singh</p>
                          <p style={{
                            color:"#3d81bb"
                          }}>  Images</p>
                        </div>
                    </div>
                    <div style={{
                        display:'flex',
                        justifyContent:"space-between",
                        width:"100%",
                        marginBottom:"50px"
                    }}>
                        <div style={{
                            width:"49%",
                            height:"170px",
                        
                        }}
                        
                        >
                        <img src="https://www.holidify.com/images/tooltipImages/MCLEODGANJ.jpg" alt=""
                         
                         style={{
                            width:"100%",
                            height:"100%",
                            borderRadius:"5px"
                         }}
                        />
                         <p> Ramveer sing</p>
                         <p style={{
                            color:"#3d81bb"
                         }}> Images</p>
                        </div>
                        <div style={{
                            width:"49%",
                            height:"170px"
                        }}>


                         <img src="https://www.holidify.com/images/tooltipImages/NAINITAL.jpg" alt=""
                         
                         style={{
                            width:"100%",
                            height:"100%",
                            borderRadius:"5px"
                         }}
                          />
                          <p> Ramveer singh</p>
                          <p style={{
                            color:"#3d81bb"
                          }}>  Images</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Photo