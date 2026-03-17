/* ═══════════════════════════════════════════════════════════
   SOZO Boutique Salons — Main Script
   All data embedded — no fetch() calls needed.
   Works with file://, http://, or https://
   ═══════════════════════════════════════════════════════════ */

/* ── Embedded Data ────────────────────────────────────────── */
var REVIEWS_DATA = [{"stars": "★★★★★", "text": "Tiffany Johnson is a talented hair stylist!", "author": "Montse F.", "date": "2017", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Mrs. J", "date": "2018", "source": "google"}, {"stars": "★★★★★", "text": "The Best", "author": "Victoria P.", "date": "2018", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Vladimir K.", "date": "2018", "source": "google"}, {"stars": "★★★★★", "text": "Great salon.", "author": "Jill R.", "date": "2018", "source": "google"}, {"stars": "★★★★★", "text": "Go see Ashley! She genuinely cares about her clients, very professional. Thanks Ashley!", "author": "Lisa M.", "date": "2018", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Christina H.", "date": "2019", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Troy R.", "date": "2019", "source": "google"}, {"stars": "★★★★★", "text": "I go to Kelly to get my nails done here and she is the absolute best. Plenty of options and she always does a good job, haven’t been to a different nail technician in over 3 years.", "author": "Murren M.", "date": "2019", "source": "google"}, {"stars": "★★★★★", "text": "Amazing wiley's color is the best", "author": "Michell C.", "date": "2019", "source": "google"}, {"stars": "★★★★★", "text": "Tatyana is my lifeline. It's a pleasure every time is see her and I'm always happy with my hair. Today I went in for a cut, it's three hours later and I keep finding myself going to mirror to check it out and play with it. I couldn't be happier!", "author": "Stevi M.", "date": "2019", "source": "google"}, {"stars": "★★★★★", "text": "I was happy to find this place. It is a place with more of 10 locals, they are own for different people, you can find different hair salons, a place to tread your facial hair, massages, nails. I really like this place.", "author": "Martha B.", "date": "2019", "source": "google"}, {"stars": "★★★★★", "text": "Best salon in The Woodlands! Mauricio is amazing at hair color and Eloisa provides the best haircut/style of any stylish I've ever been to!", "author": "Chastity P.", "date": "June 4, 2019", "source": "google"}, {"stars": "★★★★★", "text": "Kelly is always a top notch aesthetician, she does a great job whether nails, brows or lashes... flexible scheduling and she’s meticulous about keeping her tools sanitary.", "author": "Amylou G.", "date": "August 4, 2019", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Lourdes S.", "date": "October 16, 2019", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Erica E.", "date": "November 11, 2019", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Joseph R.", "date": "January 23, 2020", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Healthy Beauty and More", "date": "February 3, 2020", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Chelsea G.", "date": "February 15, 2020", "source": "google"}, {"stars": "★★★★★", "text": "Brandy is AMAZING!She has totally transformed my hair form burnt and flat to soft and silky. At age 50, this may be the best may have ever looked", "author": "Dani Q.", "date": "February 22, 2020", "source": "google"}, {"stars": "★★★★★", "text": "Nina was amazing. Great boutique!", "author": "Liller W.", "date": "February 28, 2020", "source": "google"}, {"stars": "★★★★★", "text": "I have been so scared to go to a salon ever since last year when I had a terrible experience at a mall salon, I left crying. I didn’t know what to expect but Arnold did my hair and restored my faith in humanity. He was super sweet ( got me 2 bags of Doritos when I said I was hungry and a Sierra Mist ) but most importantly he is a phenomenal hairstylist. He fixed the hack job I had gotten at a different salon and he knows blonde!! I haven’t felt beautiful in a long time but I left his chair feeling like Beyoncé. He’s the very best stylist I have ever had and I will never go anywhere else for life! He took his time and I never felt rushed; it was like seeing an old friend who happens to be amazing at hair. He is a gem and if you want your hair to look flawless go to Arnold!!", "author": "Alex O.", "date": "May 14, 2020", "source": "google"}, {"stars": "★★★★★", "text": "Sissy is the way to one’s heart when it comes to hair! Always on time, understands what the ever changing mind wants and will walk you through it, and THEN executes every time. I’m a golfer with long hair so my hair color is always changing in the sun. She keeps me feeling natural, yet sexy. Thank you Sissy, so glad I found you! 🤍", "author": "Bianca S.", "date": "June 27, 2020", "source": "google"}, {"stars": "★★★★★", "text": "This place is good", "author": "Edwin C.", "date": "October 22, 2020", "source": "google"}, {"stars": "★★★★☆", "text": "I went to LaModa Salon inside SOZO. I really liked the ladies working there. It was very clean and well stocked. I had a simple service, but was very pleased and look forward to my next appointment there.", "author": "Kathy W.", "date": "2021", "source": "google"}, {"stars": "★★★★★", "text": "I don't come here for the salon. I come here for Nails by Kelly! She does an amazing job! And the price is very reasonable! I would highly recommend Nails by Kelly!", "author": "MimiSings4", "date": "May 7, 2021", "source": "google"}, {"stars": "★★★★★", "text": "My favorite about this salon is the first person a see at the reception when I enter - Kelly. So kind, nice and attentive. Genuinely cares that you get to see who you need quickly. And if one has to wait a little offers cup of coffee as if feeling that you need and makes you feel welcome.", "author": "Fidan M.", "date": "June 26, 2021", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Maddison A.", "date": "July 8, 2021", "source": "google"}, {"stars": "★★★★★", "text": "Wonderful Sarah as always!", "author": "Thursday", "date": "July 10, 2021", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Rebecka L.", "date": "October 25, 2021", "source": "google"}, {"stars": "★★★★★", "text": "Beautiful", "author": "Ruby B.", "date": "2022", "source": "google"}, {"stars": "★★★★★", "text": "Like my brow place!", "author": "Liia P.", "date": "January 12, 2022", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Afton S.", "date": "January 16, 2022", "source": "google"}, {"stars": "★★★★☆", "text": "Haircut from XtinaFay at Sozo was awesome!", "author": "Sonia J.", "date": "April 1, 2022", "source": "google"}, {"stars": "★★★★☆", "text": "Everyone was so nice and my daughter got a great cut!", "author": "Maddison A.", "date": "May 28, 2022", "source": "google"}, {"stars": "★★★★★", "text": "WE WERE IN SOZO HAIR DESIGN YESTERDAY, MY MOTHER HAVE A BEAUTIFUL AWESOME HAIRCUT BY AN AMABLE MISS TONY GLAZEBROOK, SHE DID A WONDERFUL WORK. And all he staff was very kind and attentive, I'll be happy to return there to try doing my hair too! Congratulations Tony 🙏🏼", "author": "Jessy", "date": "December 24, 2022", "source": "google"}, {"stars": "★★★★☆", "text": "Nicely maintained and good staff! Went there for my sons and daughters hair cut. Will definitely go again", "author": "Rafiq K.", "date": "March 9, 2023", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Shikha M.", "date": "June 20, 2023", "source": "google"}, {"stars": "★★★★★", "text": "Troy has been cutting my hair for at least 15 years! He gives a precision cut that keeps its shape for months. Jocelyn gives a shampoo and scalp massage that is so relaxing. It’s always a great experience!", "author": "Jana B.", "date": "December 30, 2023", "source": "google"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Mariana L.", "date": "January 5, 2024", "source": "google"}, {"stars": "★★★★★", "text": "I HIGHLY recommend going to Giselle! I get a short/bob style haircut and she always does such an amazing job and she’s also phenomenal at doing color. Thank you!!!", "author": "Stefani D.", "date": "June 22, 2024", "source": "google"}, {"stars": "★★★★☆", "text": "They did a great job with my daughter's hair", "author": "Clay B.", "date": "October 8, 2024", "source": "google"}, {"stars": "★★★★★", "text": "I had my hair cut and highlighted by Amarena last week and I am SOO happy!! She got exactly the style of cut that I was going for (a change for me) and the colour and density of highlights is a dream!!! I have coloured my hair for almost 20 years with many different stylists and this was one of the best results. Will absolutely come back next time I’m in The Woodlands (from Canada).", "author": "Alex K.", "date": "November 10, 2024", "source": "google"}, {"stars": "★★★★★", "text": "Maida is now at Sozo Spa Salons. Visited her last week for another great haircut. Great job as always. Go see Maida!", "author": "Paul M.", "date": "February 22, 2025", "source": "google"}, {"stars": "★★★★★", "text": "Ready for haircut!", "author": "Joaquín H.", "date": "March 29, 2025", "source": "google"}, {"stars": "★★★★★", "text": "LOVE LOVE LOVE This salon!!", "author": "Savannah C.", "date": "September 2, 2014", "source": "facebook"}, {"stars": "★★★★★", "text": "This is the most professional and beautiful hair salon I've ever been to in my life ! I'm so happy to be here and start a new chapter in my life ! Such an awesome, and positive vibe as well ! Anyone that comes here will always feel refresh and relax ! ! !  Only come to the NUMBER ONE hair salon ever SoZO !", "author": "Samantha V.", "date": "September 18, 2014", "source": "facebook"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Jade E.", "date": "April 3, 2017", "source": "facebook"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Melanie N.", "date": "April 12, 2017", "source": "facebook"}, {"stars": "★★★★★", "text": "I love working here! The atmosphere is upscale & inviting!", "author": "Nita W.", "date": "July 30, 2017", "source": "facebook"}, {"stars": "★★★★★", "text": "⭐⭐⭐⭐⭐", "author": "Teri V.", "date": "January 4, 2018", "source": "facebook"}, {"stars": "★★★★★", "text": "HIGHLY RECOMMEND NAILS BY KELLY, QUYNH GIP FOR HAIR CUT AND STYLE, AND WILEY FOR COLOR!  TRIFECTA!", "author": "Maria N.", "date": "March 21, 2018", "source": "facebook"}, {"stars": "★★★★★", "text": "I LOVE IT!!! Mauricio did my color & Eloisa did the cut!!! Absolutely amazing!!! Love them!!", "author": "Joyce A.", "date": "May 5, 2018", "source": "facebook"}, {"stars": "★★★★★", "text": "I would highly recommend Tatyana Mc micheal.Tatyana is a fantastic Hairdresser and Make up artist I am always so happy with the results .I’m so glad I found her..Amazing results", "author": "Bernadette T.", "date": "September 16, 2019", "source": "facebook"}, {"stars": "★★★★★", "text": "The BEST SALON in THE WOODS!", "author": "Christina C.", "date": "June 26, 2020", "source": "facebook"}, {"stars": "★★★★★", "text": "amazing results. the receptionist was extremely nice. the service was great", "author": "Rachel H.", "date": "April 24, 2021", "source": "facebook"}, {"stars": "★★★★★", "text": "Sozo Boutique Salons and Spa is a great salon and spa in The Woodlands. My hairstylist Troy really pays attention to his clients needs and makes sure you are happy with your overall experience. If you are looking for a salon that has all your Salon and Spa needs then Sozo Boutique is the place for you.", "author": "Luis C.", "date": "May 21, 2014", "source": "yelp"}, {"stars": "★★★★★", "text": "Kelly is the best nail technician I have ever been to, and I am very picky when it comes to my nails. I followed her from another salon, and would follow her anywhere in the city if I had to! She is attentive, thorough, and wants you to be happy with her work. She is also very funny! I love coming to see her, and I am always confident she will do detailed and excellent nail work, always! I tried all of the salons around The Woodlands, and she is by far the most skilled when it comes to taking care of your nails. She even takes extra time on areas of your nails others won't. Thank you, Kelly!", "author": "Kristi G.", "date": "Oct 15, 2015", "source": "yelp"}, {"stars": "★★★★★", "text": "I'm so happy for Kelly that she has her own salon now. She's excellent and always provides a professional mani/pedi. Kelly is a kind and caring person and always makes you feel welcome. She takes a lot pride in her work and it shows! I get lots of compliments on my manis. Please give her a try! You'll soon become another one of her loyal customers.", "author": "Melissa W.", "date": "Nov 4, 2015", "source": "yelp"}, {"stars": "★★★★★", "text": "Quyin does amazing work guys! I'm picky with who I let cut my hair or I don't cut it at all. She is very creative and always make time for me with my busy schedule. Come find out for yourself, you won't regret it!", "author": "Khy G.", "date": "May 4, 2016", "source": "yelp"}, {"stars": "★★★★★", "text": "Quynh is the best!!! Very professional, clean atmosphere, and everyone else was very nice too. I sent my wife there and she came back with nothing but good things to say. Prices are very seasonable.", "author": "Dung L.", "date": "May 4, 2016", "source": "yelp"}, {"stars": "★★★★★", "text": "You get all the amenities of an expensive spa for a reasonable price here. Kelley is the only one working here, so you definitely NEED AN APPOINTMENT. It doesn't say so on Yelp, and Kelley can't fix it to say it- but she is very accommodating and tries to fit you into her busy schedule. She is available by text and phone call. You will feel really special as she is the only one there and focuses only on you. Not only that but this lets her put special attention and detail into everything she does without the rushed feeling other nail salons can have when things get too busy. She did a great job with everything; I highly recommend her! I will be back for sure! This is the best nail salon experience that I have ever had.", "author": "Kerry C.", "date": "Jul 1, 2016", "source": "yelp"}, {"stars": "★★★★★", "text": "I brought my son in (he's growing out his hair to donate) on an asap basis and they could see us right away. We had just moved here and had no idea where to go! Sophie was so gentle and sweet and Good with him that I went back to have her do my hair the next week. The fabulous atmosphere was worth a lot, but the product is even more fantastic. My hair is more beautiful and sexy than it has ever been, easy to style or not style and still looks great, I can still easily put it back during those times I need to work hard, and the color is absolutely amazing. We totally lucked out and found our stylist quickly! We'll be regulars there for sure.", "author": "Monique K.", "date": "Sep 11, 2016", "source": "yelp"}, {"stars": "★★★★★", "text": "Tiffany J. is fantastic! She's been cutting & styling my hair for years, and always leaves me with a smile. Excited she's offering gift certificates this holiday season!! If you're looking for a great cut & style, for a great price, I'd definitely recommend Tiffany.", "author": "Christie C.", "date": "Oct 13, 2016", "source": "yelp"}, {"stars": "★★★★★", "text": "I came in with really dark hair and wanted a change, Marci took me in for a last minute appointment. She added highlights to my hair and they came out amazing! I recommend her to anyone", "author": "Jessica R.", "date": "Sep 10, 2017", "source": "yelp"}, {"stars": "★★★★★", "text": "If you want a head-turning haircut, look no further than Shaun at Sozo. He is the only person I let come around my head with scissors. Quality: The best hairstylist I have ever had. I always get compliments post haircut. He has the best hands -- when he's washing your hair, your scalp will thank you. It's like going to a masseuse! He is also gentle. Im not tender-headed, but I can't think of a time where he has ever pulled my hair when cutting it. He uses the best products. They smell good and leave your hair soft and shiny. Personality: He knows how to read people so he can create good conversation or stay quiet if you look like you or aren't in the mood and would rather relax. He's funny though! I always enjoy coming in and seeing that big smile immediately followed by a comical anecdote. Oh, p.s. ladies: he smells really good! ;) Price: Affordable. I would have thought The Woodlands would be more expensive but I guess he charges fairly because he is passionate about what he does and doesn't want to price gouge. He takes his time with his clients and wants you to walk out happy and looking good with a new found confidence. I always leave feeling like a new person and give him a big tip because he does an awesome job. I always get compliments on my hair! Thanks Shaun! In conclusion, if you value your hair and want a stylish cut or color, go to Shaun. If you want an affordable cut and someone to brighten your day, also go to Shaun. I hope this helps. Location: Sozo salon, behind Pei Wei near the 24 hr fitness and Trader Joes.", "author": "Jessica R.", "date": "Apr 6, 2018", "source": "yelp"}, {"stars": "★★★★★", "text": "I have been looking for someone who could highlight and style my very fine and short hair. I finally found someone! Lauren did a wonderful job and I am so pleased. Everyone was wearing masks and social distancing was practiced while I was there. The salon is very attractive and I was well taken care of the entire time.", "author": "Andrea K.", "date": "Jan 30, 2021", "source": "yelp"}, {"stars": "★★★★★", "text": "I came in as a walk-in and was thankfully booked quickly. My stylist Sarah perfectly executed everything I wanted! On top of a spot-on balayage and face framing I was able to find products that would keep my hair shiny and healthy. As someone going from dark brown to blonde, it can be difficult to find a hair dresser that understands the vision you have for your hair, but my expectations were exceeded during my visit by not only service but quality. Highly recommend!", "author": "Amanda S.", "date": "Sep 2, 2021", "source": "yelp"}, {"stars": "★★★★★", "text": "Sarah is AWESOME !!! She works so hard. I can in before my birthday and before I leave for vacation. She is so down to earth and so sweet. She made my hair transform into exactly what I wanted. I showed her a picture and she did exactly that and more. She did a fantastic job. Will defiantly go back to her again!", "author": "Brittany D.", "date": "Dec 31, 2021", "source": "yelp"}, {"stars": "★★★★★", "text": "Great new location in The Woodlands on the side behind Trader Joe's for Maida. The best stylist in The Woodlands.", "author": "Paul M.", "date": "Feb 18, 2025", "source": "yelp"}];
var DIRECTORY_DATA = {"hair_and_makeup": [{"name": "Arnold's Salon", "suite": "103", "image": "./img/directory/arnolds.jpeg", "contacts": "Arnold Garcia - (936) 827-0996", "services": ["Woman's Cuts", "Men's Cuts", "Color", "Blowouts", "Hair Care Products"], "links": [{"text": "Website", "url": "http://www.arnoldssalon.com/"}, {"text": "Facebook", "url": "https://www.facebook.com/Hairsarnold"}, {"text": "Instagram", "url": "https://www.instagram.com/arnoldssalon/"}, {"text": "X", "url": "https://x.com/ArnoldsSalon"}]}, {"name": "Bei Capelli Salon", "suite": "210", "image": "./img/directory/bein-capelli.jpg", "contacts": "Terri Clendennen - (281) 468-4227", "services": ["Full Service Hair", "Extensions", "Keratin Treatment", "Intense Scalp/Hair Conditioning Treatments", "Facial Waxing", "Makeup"], "links": [{"text": "Website", "url": "https://square.site/book/3PG2TA9956W5Y/bei-capelli-salon-llc-the-woodlands-tx"}, {"text": "Facebook", "url": "https://www.facebook.com/beicapellisalonTW/"}]}, {"name": "Hair by Eloisa", "suite": "123", "image": "./img/directory/hair-by-eloisa.jpeg", "contacts": "Eloisa Toral - (832) 492-3512", "services": ["Cut", "Style", "Updo", "Brazilian Blowout", "All Over Color"], "links": [{"text": "Instagram", "url": "https://www.instagram.com/eloisa_toral/"}, {"text": "TikTok", "url": "https://www.tiktok.com/@eloisa.toral7"}]}, {"name": "Marci Henderson", "suite": "109", "image": "./img/directory/stylist1.jpg", "contacts": "Marci Henderson - (832) 585-6322", "services": ["Full Service Hair", "Color Specialist", "Extensions", "Waxing"], "links": []}, {"name": "iArcheZ", "suite": "108", "image": "./img/directory/iArcheZ.jpg", "contacts": "Shikha Maura - (936) 217-3335", "services": ["Brow Threading", "Tinting", "Waxing Services", "Hair", "Facial/Spa"], "links": [{"text": "Website", "url": "https://www.iarchez.com/"}, {"text": "Facebook", "url": "https://www.facebook.com/iArchez/"}, {"text": "X", "url": "https://x.com/iArcheZ"}]}, {"name": "J’adore Studio Salon", "section": "2", "image": "./img/directory/jadore-studio-salon.jpg", "contacts": "Wendy Rivera - (346) 273-7040", "services": ["Full Service Hair", "Balayage", "Hair Treatments", "Keratin", "Hair Botox", "Color", "Highlights", "Blowouts"], "links": [{"text": "Website", "url": "https://jadorestudiosalon.com/"}, {"text": "Facebook", "url": "https://www.facebook.com/profile.php?id=100070952551457"}, {"text": "Instagram", "url": "https://www.instagram.com/Jadorestudio_salon/"}, {"text": "TikTok", "url": "https://www.tiktok.com/@jadoress21"}]}, {"name": "La Moda Salon", "suite": "150", "image": "./img/directory/la-moda-salon.png", "contacts": ["Appointments - (713) 382-2151", "Mariam Warrad - (281) 460-6499", "Angela - Hair Stylist", "Yesenia - Hair Stylist", "Kaley - Hair Stylist", "Kayla - Salon Coordinator"], "services": ["Full Service Hair", "Extensions", "Hairdreams MicroLines"], "links": [{"text": "Website", "url": "https://lamodaspa.com/"}, {"text": "Facebook", "url": "https://www.facebook.com/MariamWarradLaModaSalon"}, {"text": "Instagram", "url": "https://www.instagram.com/lamodasalonhair/"}]}, {"name": "Luminoso Hair Studio", "suite": "130", "image": "./img/directory/luminoso-hair-studio.jpg", "contacts": ["Maria Perez - (281) 914-9252", "Lacey Gutierrez - Stylist", "Isabella - Assistant Stylist"], "services": ["Specializing in Lived-In Blondes & Brondes", "Corrective Color", "Hair Extensions"], "links": [{"text": "Website", "url": "https://www.luminosohairstudio.com/"}, {"text": "Facebook", "url": "https://www.facebook.com/luminosohairstudio/"}, {"text": "Instagram", "url": "https://www.instagram.com/luminosohs/"}, {"text": "TikTok", "url": "https://www.tiktok.com/@luminosohs"}]}, {"name": "Maida's Haircuts", "section": "1", "image": "./img/directory/maida-bautista.png", "contacts": "Maida Bautista - (832) 963-0210", "services": ["Cut", "Style", "Color", "Highlights", "Deep Conditioning", "Hair Treatments", "Face Waxing"], "links": [{"text": "Website", "url": "https://maidashaircuts.square.site/"}, {"text": "Instagram", "url": "https://www.instagram.com/maidashaircuts/"}]}, {"name": "Norma's Hair Salon", "section": "2", "image": "./img/directory/norma-guerrero.png", "contacts": "Norma Guerrero - (281) 590-4009", "services": ["Full Service Hair", "Color", "Highlights", "Updos", "Perms", "Gloss", "Face Waxing", "Makeup"], "links": [{"text": "Website", "url": "https://normas-hair-salon.square.site/"}]}, {"name": "The Paint Palette Hair Color Studio", "suite": "100", "image": "./img/directory/paint-palette-hair-color-studio.png", "contacts": "Angela Shimmel - (281) 844-4674", "services": ["Color Specialist", "Style", "Brazilian Blowout"], "links": [{"text": "Facebook", "url": "https://www.facebook.com/p/The-Paint-Palette-Hair-Color-Studio-100067469991126/"}]}, {"name": "Jessica Ramon", "section": "3", "image": "./img/directory/stylist5.jpg", "contacts": "Jessica Ramon - (713) 562-1538", "services": ["Men/Boys' Cuts", "Beard Trim", "Stylist Razor Shave"], "links": []}, {"name": "Salon Remain", "suite": "200", "image": "./img/directory/salon-remain.jpg", "contacts": ["Appointments - (281) 203-5063", "Troy Rothrock - Master Stylist", "Jocelyn Lister - Style Assistant", "Amanda Pilotte - Junior Stylist"], "services": ["Full Service Hair", "Makeup"], "links": [{"text": "Website", "url": "https://salonremain.com/"}, {"text": "Facebook", "url": "https://www.facebook.com/profile.php?id=61586267513807"}, {"text": "Instagram", "url": "https://www.instagram.com/salonremain"}, {"text": "TikTok", "url": "https://www.tiktok.com/@salonremain26"}]}, {"name": "Snapdragon Salon", "suite": "140", "image": "./img/directory/snapdragon-salon.jpeg", "contacts": "Sissy Silar - (832) 823-8851", "services": ["Full Service Hair", "Women's Cuts", "Men's Cuts", "Children's Cuts", "Color", "Men's Gray Camouflage", "Highlights", "Balayage", "Hair Extensions", "Brazilian Blowout", "Event Styles", "Waxing"], "links": [{"text": "Website", "url": "https://www.salonsnapdragon.com/"}, {"text": "Instagram", "url": "https://www.instagram.com/hairbysissys/"}]}, {"name": "Thairapy", "suite": "113", "image": "./img/directory/thairapy.jpg", "contacts": "Kristin Gallipeau - (832) 381-6866", "services": ["Full Service Hair", "Makeup"], "links": [{"text": "Instagram", "url": "https://www.instagram.com/thairapybykris/"}]}, {"name": "Ashley Thompson-Vergara", "suite": "220", "image": "./img/directory/ashley-thompson-vergara.jpg", "contacts": "Ashley - (936) 203-8880", "services": ["Full Service Hair", "Extensions", "Brazilian Blowout", "Makeup"], "links": [{"text": "Website", "url": "https://www.styleseat.com/m/v/ashleythompson9"}, {"text": "Instagram", "url": "https://www.instagram.com/ashleyvergarastylist/"}]}, {"name": "Amanda Wade", "section": "3", "image": "./img/directory/stylist4.jpg", "contacts": "Amanda Wade - (713) 384-9741", "services": ["Men's/Boys' Cuts", "Beard Trim", "Stylist Razor Shave", "Facial"], "links": []}, {"name": "The YK's Hair Studio", "suite": "106", "image": "./img/directory/the-yks-hair-salon.jpg", "contacts": "Jaya - (331) 330-1800", "services": ["Hair Cuts", "Women's", "Men's", "Children's", "Hair Coloring & Highlights", "Hair Treatments", "Blowouts & Styling", "Gloss", "Perms", "Keratin Treatments & More"], "links": [{"text": "Website", "url": "https://www.theykshairstudio.com"}, {"text": "Facebook", "url": "https://www.facebook.com/TheYKsHairStudio"}, {"text": "Instagram", "url": "https://www.instagram.com/theykshairstudio"}, {"text": "Pinterest", "url": "https://www.pinterest.com/theykshairstudio/"}]}], "stylists": ["First Last - (555) 555-5555", "Michael Reed - (281) 555-2346", "Lauren Hill - (281) 555-6780", "David Carter - (281) 555-1235"], "spa_and_wellness": [{"name": "Aestetika Skin Care and Electrolysis", "suite": "170", "image": "./img/directory/aestetika-skin.png", "contacts": ["Martha Sanabria - (713) 714-0737"], "services": ["Facial/Spa", "Microcurrent Treatment", "Electrolysis (Permanent Hair Removal)", "Microdermabrasion"], "links": [{"text": "Website", "url": "https://thewoodlandsskincare.com/"}]}, {"name": "Kelly's Beauty Room", "suite": "175", "image": "./img/directory/nails1.jpg", "contacts": "Kelly Nguyen - (832) 916-7534", "services": ["Nail Care (Mani/Pedi)", "Lashes", "Waxing"], "links": []}, {"name": "Pink Lotus Salon", "suite": "112", "image": "./img/directory/pink-lotus-salon.jpg", "contacts": "Sonia Zamora - (936) 648-5820", "services": ["Nail Care (Mani/Pedi)", "Acrylics", "Shellac Gel Polish", "Dipping Powder"], "links": []}, {"name": "Total Wax by Nina", "suite": "185", "image": "./img/directory/total-wax-by-nina.jpg", "contacts": "Nina Ryan - (832) 803-3455", "services": ["Brazilian Waxing (Full Body)", "Swedish Massage", "Facial"], "links": [{"text": "Website", "url": "https://totalwaxbynina.com/"}, {"text": "Facebook", "url": "https://www.facebook.com/Totalwax/"}, {"text": "Instagram", "url": "https://www.instagram.com/Totalwaxbynina/"}, {"text": "YouTube", "url": "https://www.youtube.com/@totalwaxbynina9178/"}]}, {"name": "Trinity Stones Massage", "suite": "180", "image": "./img/directory/trinity-stones-massage.jpg", "contacts": "Rachel Gamez - (936) 330-7647", "services": ["Massage Therapy", "Swedish Massage", "Deep Tissue Massage", "Prenatal Massage", "Hot Stone Massage", "Aromatherapy", "Cupping"], "links": [{"text": "Website", "url": "https://www.massagebook.com/therapists/trinity-stones-massage"}, {"text": "Facebook", "url": "https://www.facebook.com/Trinitystonesmassage"}, {"text": "Instagram", "url": "https://www.instagram.com/trinity.stones/"}]}], "retail": [{"name": "Red Ink Boutique", "image": "./img/directory/red-ink-boutique.jpg", "contacts": ["Rosie - (346) 305-8651"], "services": ["Clothing", "Gifts", "Accessories"], "links": [{"text": "Website", "url": "https://www.redinkboutique.com/"}, {"text": "Facebook", "url": "https://www.facebook.com/redinkthewoodlands"}, {"text": "Instagram", "url": "https://www.instagram.com/redinkboutique/"}, {"text": "YouTube", "url": "https://www.youtube.com/@Rosie-miracle-oils"}]}]};
var SERVICES_DATA = [{"category": "Haircuts", "image": "./img/services/01-haircuts.jpg", "items": ["Men's Cuts", "Women's Cuts", "Children's Cuts"]}, {"category": "Coloring", "image": "./img/services/02-coloring.jpg", "items": ["Full Color", "Highlights", "Balayage", "Ombre"]}, {"category": "Styling", "image": "./img/services/03-styling.jpg", "items": ["Blowouts", "Updos", "Special Event Styling"]}, {"category": "Extensions", "image": "./img/services/04-extensions.jpg", "items": ["Tape-In Extensions", "Clip-In Extensions", "Keratin Bond Extensions"]}, {"category": "Hair Treatments", "image": "./img/services/05-hair-treatment.jpg", "items": ["Keratin Treatments", "Deep Conditioning", "Scalp Treatments"]}, {"category": "Bridal Makeup", "image": "./img/services/06-bridal.jpg", "items": ["Bridal Trials", "Wedding Day Makeup", "Bridesmaid Makeup"]}, {"category": "Makeup", "image": "./img/services/07-makeup.jpg", "items": ["Contouring", "Evening Makeup", "Makeup Lessons"]}, {"category": "Nails", "image": "./img/services/08-nails.jpg", "items": ["Manicures", "Pedicures", "Nail Art"]}, {"category": "Massage", "image": "./img/services/09-massage.jpg", "items": ["Deep Tissue", "Swedish Massage", "Hot Stone"]}, {"category": "Facials", "image": "./img/services/10-facials.jpg", "items": ["Hydrating Facials", "Anti-Aging Facials", "Acne Treatments"]}, {"category": "Botox", "image": "./img/services/11-botox.jpg", "items": ["Forehead Lines", "Crow's Feet", "Frown Lines"]}, {"category": "Aromatherapy", "image": "./img/services/12-aromatherapy.jpg", "items": ["Essential Oil Massage", "Aroma Steam", "Custom Blends"]}, {"category": "Reflexology", "image": "./img/services/13-reflexology.jpg", "items": ["Foot Reflexology", "Hand Reflexology", "Stress Relief"]}, {"category": "Body Wraps", "image": "./img/services/14-body-wraps.jpeg", "items": ["Detox Wraps", "Hydrating Wraps", "Slimming Wraps"]}, {"category": "Skincare", "image": "./img/services/15-skincare.jpg", "items": ["Chemical Peels", "Microdermabrasion", "Custom Skincare Plans"]}];
var PRODUCTS_DATA = [{"name": "ZENZ Organic", "image": "./img/products/zenz.jpg", "url": "https://organicshampoo.best/"}, {"name": "KEVIN MURPHY", "image": "./img/products/kevin-murphy.jpg", "url": ""}, {"name": "Moroccanoil", "image": "./img/products/moroccanoil.webp", "url": ""}];


/* ── Social Icons ─────────────────────────────────────────── */
var ICONS = {
  Website:   '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  Facebook:  '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>',
  Instagram: '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm.003 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.276 1.485.038.843.047 1.096.047 3.231s-.01 2.389-.047 3.232c-.036.78-.166 1.203-.276 1.485-.145.373-.319.64-.599.92s-.546.453-.92.598c-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.282-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.232-.047zM8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216zm0 6.775a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334zm5.23-6.937a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z"/></svg>',
  TikTok:    '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/></svg>',
  Twitter:   '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/></svg>',
  X:         '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>',
  Pinterest: '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.98-4.172.98-4.172s-.25-.499-.25-1.238c0-1.158.671-2.023 1.506-2.023.71 0 1.054.533 1.054 1.171 0 .714-.456 1.786-.692 2.778-.197.828.417 1.502 1.232 1.502 1.479 0 2.617-1.559 2.617-3.81 0-1.99-1.431-3.383-3.475-3.383-2.368 0-3.758 1.775-3.758 3.608 0 .713.274 1.478.616 1.895a.25.25 0 0 1 .058.232c-.063.26-.202.826-.23.941-.037.152-.124.184-.285.111-1.049-.488-1.704-2.021-1.704-3.252 0-2.645 1.921-5.077 5.543-5.077 2.91 0 5.17 2.072 5.17 4.839 0 2.888-1.82 5.207-4.347 5.207-.849 0-1.649-.441-1.923-.962l-.522 1.948c-.19.728-.698 1.638-1.039 2.194A8 8 0 1 0 8 0"/></svg>',
  YouTube:   '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>',
  Default:   '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>'
};

/* ── Helpers ──────────────────────────────────────────────── */
function linkifyPhone(str) {
  return str.replace(/(\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4})/g, '<a href="tel:$1">$1</a>');
}

function scrollToId(id) {
  var el = document.getElementById(id);
  if (!el) return;
  var header = document.getElementById('site-header');
  var offset = header ? header.offsetHeight : 76;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
}

/* ── Header scroll shadow ─────────────────────────────────── */
function initHeaderScroll() {
  var h = document.getElementById('site-header');
  if (!h) return;
  window.addEventListener('scroll', function() {
    h.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ── Mobile nav ───────────────────────────────────────────── */
function initNav() {
  var btn = document.querySelector('.hamburger');
  var nav = document.getElementById('main-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function() {
    var open = nav.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var href = this.getAttribute('href') || '';
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      if (href.startsWith('#')) {
        e.preventDefault();
        scrollToId(href.slice(1));
        return;
      }
      var parts = href.split('#');
      var hash = parts[1];
      var page = parts[0];
      var currentPage = window.location.pathname.split('/').pop() || 'index.html';
      if (hash && (page === 'index.html' || page === '')) {
        if (currentPage === 'index.html' || currentPage === '') {
          e.preventDefault();
          scrollToId(hash);
        } else {
          sessionStorage.setItem('scrollTarget', hash);
        }
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── Scroll restore ───────────────────────────────────────── */
function restoreScroll() {
  var target = sessionStorage.getItem('scrollTarget');
  if (!target) return;
  sessionStorage.removeItem('scrollTarget');
  setTimeout(function() { scrollToId(target); }, 400);
}

/* ── Scroll reveal ────────────────────────────────────────── */
function initReveal() {
  var els = document.querySelectorAll('.reveal:not(.visible)');
  if (!els.length) return;
  if (!window.IntersectionObserver) {
    els.forEach(function(el) { el.classList.add('visible'); });
    return;
  }
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  els.forEach(function(el) { io.observe(el); });
}

/* ── Year ─────────────────────────────────────────────────── */
function setYear() {
  document.querySelectorAll('#year').forEach(function(el) {
    el.textContent = new Date().getFullYear();
  });
}

/* ── Reviews ──────────────────────────────────────────────── */
function loadReviews() {
  var track = document.getElementById('reviews-track');
  if (!track) return;

  var reviews = REVIEWS_DATA.filter(function(r) {
    return r.text && r.text.replace(/[⭐★\s]/g, '').length > 2;
  });

  // Shuffle
  for (var i = reviews.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = reviews[i]; reviews[i] = reviews[j]; reviews[j] = tmp;
  }

  var html = '';
  reviews.forEach(function(r) {
    var stars = r.stars || '\u2605\u2605\u2605\u2605\u2605';
    var src = r.source ? ' \u00b7 ' + r.source : '';
    html += '<div class="review-card">'
      + '<div class="review-stars">' + stars + '</div>'
      + '<p class="review-text">\u201c' + r.text + '\u201d</p>'
      + '<p class="review-meta">' + (r.author || 'Anonymous')
      + '<span style="opacity:.55;font-size:.82em">' + src + '</span></p>'
      + '</div>';
  });
  track.innerHTML = html;
}

/* ── Directory ────────────────────────────────────────────── */
function loadDirectory() {
  var container = document.getElementById('directory-body');
  if (!container) return;

  var dir = DIRECTORY_DATA;

  function buildCard(salon) {
    var locHtml = salon.suite
      ? '<div class="salon-location">Suite ' + salon.suite + '</div>'
      : (salon.section ? '<div class="salon-location">Chair Section ' + salon.section + '</div>' : '');

    var contacts = Array.isArray(salon.contacts) ? salon.contacts : [salon.contacts || ''];
    var contactHtml = contacts.map(function(c) {
      return '<p>' + linkifyPhone(c) + '</p>';
    }).join('');

    var linksHtml = (salon.links || []).map(function(l) {
      return '<a href="' + l.url + '" target="_blank" rel="noopener noreferrer" aria-label="' + salon.name + ' ' + l.text + '">'
        + (ICONS[l.text] || ICONS.Default) + '</a>';
    }).join('');

    return '<article class="salon-card reveal">'
      + '<div class="salon-image"><img src="' + (salon.image || './img/directory/default-salon.png')
      + '" alt="' + (salon.name || 'Salon') + '" loading="lazy"></div>'
      + '<div class="salon-card-body">'
      + '<h3 class="salon-title">' + (salon.name || '').replace(/\n/g, '<br>') + '</h3>'
      + locHtml
      + '<div class="salon-contacts">' + contactHtml + '</div>'
      + '<div class="salon-services">' + (salon.services || []).join(' \u00b7 ') + '</div>'
      + (linksHtml ? '<div class="salon-links">' + linksHtml + '</div>' : '')
      + '</div></article>';
  }

  function buildSection(title, items) {
    if (!items || !items.length) return '';
    return '<h3 class="dir-section-title">' + title + '</h3>'
      + '<div class="salon-grid">' + items.map(buildCard).join('') + '</div>';
  }

  container.innerHTML =
    buildSection('Hair + Makeup', dir.hair_and_makeup) +
    buildSection('Spa + Wellness', dir.spa_and_wellness) +
    buildSection('Retail', dir.retail);

  initReveal();
}

/* ── Services ─────────────────────────────────────────────── */
function loadServices() {
  var grid = document.getElementById('services-grid');
  if (!grid) return;
  var html = '';
  SERVICES_DATA.forEach(function(s) {
    html += '<div class="service-card reveal">'
      + '<img src="' + (s.image || '') + '" alt="' + s.category + '" loading="lazy">'
      + '<div class="service-overlay">'
      + '<div class="service-cat">' + s.category + '</div>'
      + '<div class="service-items">' + (s.items || []).join(' \u00b7 ') + '</div>'
      + '</div></div>';
  });
  grid.innerHTML = html;
  initReveal();
}

/* ── Products ─────────────────────────────────────────────── */
function loadProducts() {
  var grid = document.getElementById('products-grid');
  if (!grid) return;
  var html = '';
  PRODUCTS_DATA.forEach(function(p) {
    var inner = '<img src="' + (p.image || '') + '" alt="' + p.name + '" loading="lazy">'
      + '<span class="product-name">' + p.name + '</span>';
    html += '<div class="product-item reveal">'
      + (p.url ? '<a href="' + p.url + '" target="_blank" rel="noopener">' + inner + '</a>' : inner)
      + '</div>';
  });
  grid.innerHTML = html;
  initReveal();
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  setYear();
  initHeaderScroll();
  initNav();
  restoreScroll();
  loadReviews();
  loadDirectory();
  loadServices();
  loadProducts();
  initReveal();
});
