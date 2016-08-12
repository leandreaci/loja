    $('.date_mask').mask('00/00/0000');
    $('.time_mask').mask('00:00:00');
    $('.date_time_mask').mask('00/00/0000 00:00:00');
    $('.cep_mask').mask('00000-000');
    $('.phone_mask').mask('(00)00000-0000');
    $('.phone_with_ddd_mask').mask('(00) 0000-0000');
    $('.phone_us_mask').mask('(000) 000-0000');
    $('.mixed_mask').mask('AAA 000-S0S');
    $('.cpf_mask').mask('000.000.000-00', {reverse: true});
    $('.cnpjMask').mask('00.000.000/0000-00', {reverse: true});
    $('.money_mask').mask('000.000.000.000.000,00', {reverse: true});
    $('.money2_mask').mask("#.##0,00", {reverse: true});
    $('.ip_address_mask').mask('099.099.099.099');
    $('.percent_mask').mask('##0,00%', {reverse: true});
    $('.clear-if-not-match_mask').mask("00/00/0000", {clearIfNotMatch: true});
    $('.placeholder_mask').mask("00/00/0000", {placeholder: "__/__/____"});



