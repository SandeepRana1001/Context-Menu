var obj = new US_Servicenow_Helper_Custom();



var criterias = ['Experienced (US)'];
// var sys_id = obj.getUserCriteria(criterias.toString());

var i = 0;

// while(i<sys_id.length){
if (new sn_hr_core.hr_Criteria().evaluateById('1a81bb79dbca9190c47df674b99619e4', 'be6105fa1b1f0914e225dd77bd4bcb61')) {
    answer = true;
    // gs.info('36358 Criteria - '+criterias[i]);

    // 		break;
} else {

    answer = false;
}

i++;
// }

gs.info('36358 Answer - ' + answer);

answer;