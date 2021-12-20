function deteksiHashtag($input)
{
    $regex = "/#/";
    $hasil = [];
    
    preg_match_all($regex, $input, $hasil);

    // # kembalikan data dalam bentuk json
    return json_encode($hasil);
}

console.log(["S@nd!wara419, S@ndiwar4, S@nd1w4r3#"])
    

   

   